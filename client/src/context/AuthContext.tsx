import React, { createContext, useCallback } from 'react';
import { api } from '../services/api';

interface LoginCredencials {
  email: string;
  password: string;
}

interface AuthContextState {
  name: string;
  login: (loginCredencials: LoginCredencials) => void;
}

export const AuthContext = createContext<AuthContextState>(
  {} as AuthContextState,
);

export const AuthProvider: React.FC = ({ children }) => {
  const login = useCallback(async ({ email, password }) => {
    const response = await api.post('sessions', { email, password });

    console.log('response', response.data);
  }, []);
  return (
    <AuthContext.Provider value={{ name: 'teste', login }}>
      {children}
    </AuthContext.Provider>
  );
};
