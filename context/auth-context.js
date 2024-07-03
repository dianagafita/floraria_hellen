import { verifyAuth } from "@/lib/auth";
import { createContext } from "react";

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const response = verifyAuth();

  return (
    <AuthProvider.Provider value={{ response }}>
      {children}
    </AuthProvider.Provider>
  );
}
