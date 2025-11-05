'use client';

import { createContext, useContext, useState, useEffect } from 'react';

type AuthContextType = {
  token: string | null;
  login: (token: string) => void;
  logout: () => void;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [token, setToken] = useState<string | null>(null);

  useEffect(() => {
    try {
      const storedToken = localStorage.getItem('token');
      if (storedToken) setToken(storedToken);
    } catch (error) {
      console.error('Erro ao recuperar token do localStorage:', error);
    }
  }, []);

  const login = (newToken: string) => {
    try {
      localStorage.setItem('token', newToken);
      setToken(newToken);
    } catch (error) {
      console.error('Erro ao salvar token no localStorage:', error);
    }
  };

  const logout = () => {
    try {
      localStorage.removeItem('token');
      setToken(null);
    } catch (error) {
      console.error('Erro ao remover token do localStorage:', error);
    }
  };

  return (
    <AuthContext.Provider value={{ token, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth deve ser usado dentro de AuthProvider');
  }
  return context;
}