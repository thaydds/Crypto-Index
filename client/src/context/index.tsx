import React from 'react';

import { AuthProvider } from './AuthContext';
import { AppProvider } from './AppContext';
import { ToastProvider } from './ToastContext';

const MainAppProvider: React.FC = ({ children }) => (
  <AuthProvider>
    <AppProvider>
      <ToastProvider>{children}</ToastProvider>
    </AppProvider>
  </AuthProvider>
);

export default MainAppProvider;
