import React from 'react';

import { AuthProvider } from './AuthContext';
import { AppProvider } from './AppContext';

const MainAppProvider: React.FC = ({ children }) => (
  <AuthProvider>
    <AppProvider>{children}</AppProvider>
  </AuthProvider>
);

export default MainAppProvider;
