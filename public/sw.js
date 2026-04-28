const SW_VERSION = "v1.1.0";
const STATIC_CACHE = `sect-static-${SW_VERSION}`;
const RUNTIME_CACHE = `sect-runtime-${SW_VERSION}`;

const APP_SHELL = [
  "/",
  "/favicon-logo.png",
  "/primary-logo.png",
  "/secondary-logo.png",
  "/submark-logo.png",
  "/sec-t-logo.png",
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(STATIC_CACHE).then(async (cache) => {
      await Promise.allSettled(
        APP_SHELL.map(async (asset) => {
          const response = await fetch(asset, { cache: "no-cache" });
          if (!response.ok) return;
          await cache.put(asset, response);
        }),
      );
    }).then(() => self.skipWaiting()),
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(
        keys
          .filter((key) => key !== STATIC_CACHE && key !== RUNTIME_CACHE)
          .map((key) => caches.delete(key)),
      ),
    ).then(() => self.clients.claim()),
  );
});

const isSameOrigin = (requestUrl) => {
  const url = new URL(requestUrl);
  return url.origin === self.location.origin;
};

self.addEventListener("fetch", (event) => {
  const { request } = event;

  if (request.method !== "GET" || !isSameOrigin(request.url)) return;

  // HTML navigation: network-first, then cache fallback.
  if (request.mode === "navigate") {
    event.respondWith(
      fetch(request)
        .then((response) => {
          const copy = response.clone();
          caches.open(RUNTIME_CACHE).then((cache) => cache.put(request, copy));
          return response;
        })
        .catch(async () => {
          const cachedPage = await caches.match(request);
          if (cachedPage) return cachedPage;
          return caches.match("/index.html");
        }),
    );
    return;
  }

  // Static assets: stale-while-revalidate.
  if (["style", "script", "image", "font"].includes(request.destination)) {
    event.respondWith(
      caches.match(request).then((cached) => {
        const networkFetch = fetch(request)
          .then((response) => {
            const copy = response.clone();
            caches.open(RUNTIME_CACHE).then((cache) => cache.put(request, copy));
            return response;
          })
          .catch(() => cached);
        return cached || networkFetch;
      }),
    );
    return;
  }

  // Everything else: network-first with cache fallback.
  event.respondWith(
    fetch(request)
      .then((response) => {
        const copy = response.clone();
        caches.open(RUNTIME_CACHE).then((cache) => cache.put(request, copy));
        return response;
      })
      .catch(() => caches.match(request)),
  );
});
