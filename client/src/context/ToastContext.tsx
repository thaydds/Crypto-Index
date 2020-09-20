import React, {
  createContext,
  useCallback,
  useState,
  useContext,
  useEffect,
} from 'react';
import { showToast, ToastAnimated } from '../components/Toast';

interface ToastState {
  message: string;
  type: string;
}

interface ToastContextState {
  message: string;
  addToast: (type: string, message: string) => void;
}

export const ToastContext = createContext<ToastContextState>(
  {} as ToastContextState,
);

export const ToastProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<ToastState>({ message: '', type: '' });

  const addToast = useCallback((type: string, message: string) => {
    setData({ message, type });
  }, []);

  useEffect(() => {
    if (data.message) {
      showToast({ type: data.type, message: data.message });
      setData((prevState) => ({ ...prevState, message: '' }));
    }
  }, [data.message, data.type]);

  return (
    <ToastContext.Provider value={{ message: data.message, addToast }}>
      <ToastAnimated />
      {children}
    </ToastContext.Provider>
  );
};

export const useToast = (): ToastContextState => {
  const context = useContext(ToastContext);

  if (!context) {
    throw new Error('useToast must be used within an ToastProvider');
  }

  return context;
};
