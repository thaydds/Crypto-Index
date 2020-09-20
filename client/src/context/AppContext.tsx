import React, { createContext, useCallback, useState, useContext } from 'react';
import { api } from '../services/api';

interface LoginCredencials {
  email: string;
  password: string;
}

interface AppState {
  // eslint-disable-next-line @typescript-eslint/ban-types
  user: object;
}

interface AppContextState {
  // eslint-disable-next-line @typescript-eslint/ban-types
  user: object;
  register: (loginCredencials: LoginCredencials) => void;
}

export const AppContext = createContext<AppContextState>({} as AppContextState);

export const AppProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<AppState>({} as AppState);

  const register = useCallback(async ({ email, password }) => {
    const response = await api.post('users', {
      email,
      password,
    });

    const { user } = response.data;

    setData({ user });
  }, []);

  return (
    <AppContext.Provider value={{ user: data.user, register }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAuth = (): AppContextState => {
  const context = useContext(AppContext);

  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }

  return context;
};
