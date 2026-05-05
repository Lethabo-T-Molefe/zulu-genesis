import { createContext, useCallback, useContext, useState } from "react";
import {
  authenticate as doAuth,
  isAuthenticated as checkAuth,
  logout as doLogout,
} from "@/lib/auth-gate";

interface AuthContextValue {
  authenticated: boolean;
  login: (code: string) => boolean;
  logout: () => void;
}

const AuthContext = createContext<AuthContextValue | null>(null);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [authenticated, setAuthenticated] = useState(checkAuth);

  const login = useCallback((code: string) => {
    const ok = doAuth(code);
    if (ok) setAuthenticated(true);
    return ok;
  }, []);

  const logout = useCallback(() => {
    doLogout();
    setAuthenticated(false);
  }, []);

  return (
    <AuthContext.Provider value={{ authenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextValue => {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used within AuthProvider");
  return ctx;
};
