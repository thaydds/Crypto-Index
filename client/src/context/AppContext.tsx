import React, { createContext, useCallback, useState, useContext } from 'react';
import { api } from '../services/api';

interface LoginCredencials {
  email: string;
  password: string;
}

interface UpdateCurrencyProps {
  currency: string;
  newValue: number;
}

interface BPI {
  code: string;
  rate: string;
  description: string;
  // eslint-disable-next-line camelcase
  rate_float: number;
  locale: string;
}

interface AppState {
  // eslint-disable-next-line @typescript-eslint/ban-types
  user: object;
}

interface BPIState {
  bpi: BPI[];
}

interface AppContextState {
  // eslint-disable-next-line @typescript-eslint/ban-types
  user: object;
  bpi: BPI[];
  register: (loginCredencials: LoginCredencials) => void;
  updateCurrency: (updateCurrencyProps: UpdateCurrencyProps) => void;
  getData: () => void;
}

export const AppContext = createContext<AppContextState>({} as AppContextState);

export const AppProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<AppState>({} as AppState);
  const [bpi, setBpt] = useState<BPIState>({ bpi: [] });

  const register = useCallback(async ({ email, password }) => {
    try {
      const response = await api.post('users', {
        email,
        password,
      });

      const { user } = response.data;
      setData({ user });
    } catch (err) {
      throw new Error(err.response.data.message);
    }
  }, []);

  const updateCurrency = useCallback(async ({ currency, newValue }) => {
    try {
      const token = localStorage.getItem('@trybe:token');

      const config = {
        headers: { Authorization: `Bearer ${token}` },
      };
      const responseData = {
        currency,
        value: newValue,
      };
      await api.post('/btc', responseData, config);
    } catch (err) {
      throw new Error(err.response.data.message);
    }
  }, []);

  const getData = useCallback(async () => {
    try {
      const token = localStorage.getItem('@trybe:token');

      const config = {
        headers: { Authorization: `Bearer ${token}` },
      };
      const response = await api.get('btc', config);

      const bptData = {
        bpi: Object.values(response.data.bpi).map((t) => t),
      } as BPIState;

      setBpt(bptData);
    } catch (err) {
      throw new Error(err.response.data.message);
    }
  }, []);

  return (
    <AppContext.Provider
      value={{
        user: data.user,
        register,
        getData,
        bpi: bpi.bpi,
        updateCurrency,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = (): AppContextState => {
  const context = useContext(AppContext);

  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }

  return context;
};
