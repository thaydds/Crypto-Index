import React, { createContext, useCallback, useState, useContext } from 'react';
import { api } from '../services/api';

interface LoginCredencials {
  email: string;
  password: string;
}

interface User {
  email: string;
  id: string;
}

interface AuthState {
  token: string;
  // eslint-disable-next-line @typescript-eslint/ban-types
  user: User;
}

interface AuthContextState {
  // eslint-disable-next-line @typescript-eslint/ban-types
  user: User;
  login: (loginCredencials: LoginCredencials) => void;
  logout: () => void;
}

export const AuthContext = createContext<AuthContextState>(
  {} as AuthContextState,
);

export const AuthProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<AuthState>(() => {
    const token = localStorage.getItem('@trybe:token');
    const user = localStorage.getItem('@trybe:user');
    if (token && user) {
      return { token, user: JSON.parse(user) };
    }

    return {} as AuthState;
  });

  const login = useCallback(async ({ email, password }) => {
    try {
      const response = await api.post('sessions', {
        email,
        password,
      });

      const { token, user } = response.data;

      localStorage.setItem('@trybe:token', token);
      localStorage.setItem('@trybe:user', JSON.stringify(user));

      setData({ token, user });
    } catch (err) {
      throw new Error(err.response.data.message);
    }
  }, []);

  const logout = useCallback(() => {
    localStorage.removeItem('@trybe:token');
    localStorage.removeItem('@trybe:user');

    setData({} as AuthState);
  }, []);
  return (
    <AuthContext.Provider value={{ user: data.user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextState => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }

  return context;
};
