// Set to true to require login before any page is accessible.
// Visitors without a valid session see only the login gate — no site content is visible.
export const REQUIRE_LOGIN = true;

const ACCESS_CODE = import.meta.env.VITE_ACCESS_CODE ?? "528792";
const SESSION_KEY = "sect_auth_session";
const SESSION_TOKEN = "sect_authenticated";
const SESSION_DURATION_MS = 8 * 60 * 60 * 1000; // 8 hours

export function isAuthenticated(): boolean {
  if (typeof window === "undefined") return false;
  try {
    const raw = localStorage.getItem(SESSION_KEY);
    if (!raw) return false;
    const { token, exp } = JSON.parse(raw) as { token: string; exp: number };
    if (token !== SESSION_TOKEN || Date.now() > exp) {
      localStorage.removeItem(SESSION_KEY);
      return false;
    }
    return true;
  } catch {
    return false;
  }
}

export function authenticate(code: string): boolean {
  if (!ACCESS_CODE || code.trim() !== ACCESS_CODE) return false;
  const exp = Date.now() + SESSION_DURATION_MS;
  localStorage.setItem(SESSION_KEY, JSON.stringify({ token: SESSION_TOKEN, exp }));
  return true;
}

export function logout(): void {
  if (typeof window === "undefined") return;
  localStorage.removeItem(SESSION_KEY);
}
