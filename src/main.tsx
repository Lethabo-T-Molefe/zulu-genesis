import { hydrateRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

hydrateRoot(document.getElementById("root")!, <App />);

if (import.meta.env.PROD && "serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("/sw.js").catch((error) => {
      console.error("Service worker registration failed:", error);
    });
  });
}
