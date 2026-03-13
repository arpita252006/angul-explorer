import { createContext, useContext, useState, useEffect, ReactNode } from "react";

interface User {
  email: string;
  name: string;
  isAdmin: boolean;
}

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => boolean;
  register: (email: string, name: string, password: string) => boolean;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | null>(null);

const ADMIN_EMAIL = "arpitabai5699@gmail.com";
const ADMIN_PASSWORD = "dainapradhan047";

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const stored = localStorage.getItem("angul_user");
    if (stored) setUser(JSON.parse(stored));
  }, []);

  const login = (email: string, password: string): boolean => {
    if (email === ADMIN_EMAIL && password === ADMIN_PASSWORD) {
      const u = { email, name: "Admin", isAdmin: true };
      setUser(u);
      localStorage.setItem("angul_user", JSON.stringify(u));
      return true;
    }
    const users = JSON.parse(localStorage.getItem("angul_users") || "[]");
    const found = users.find((u: any) => u.email === email && u.password === password);
    if (found) {
      const u = { email: found.email, name: found.name, isAdmin: false };
      setUser(u);
      localStorage.setItem("angul_user", JSON.stringify(u));
      return true;
    }
    return false;
  };

  const register = (email: string, name: string, password: string): boolean => {
    const users = JSON.parse(localStorage.getItem("angul_users") || "[]");
    if (users.find((u: any) => u.email === email)) return false;
    users.push({ email, name, password });
    localStorage.setItem("angul_users", JSON.stringify(users));
    const u = { email, name, isAdmin: false };
    setUser(u);
    localStorage.setItem("angul_user", JSON.stringify(u));
    return true;
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("angul_user");
  };

  return (
    <AuthContext.Provider value={{ user, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used within AuthProvider");
  return ctx;
};
