import React, { Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { QueryClientProvider } from '@tanstack/react-query';
import AppRoutes from 'AppRoutes';
import { queryClient } from 'services/queryClient';
import AuthContext from 'modules/Auth/context/AuthContext';
import useAuthController from 'modules/Auth/context/useAuthController';
import 'assets/styles/bookry.scss';
import { AlertProvider } from 'context/AlertContext';

const App = () => {
  const auth = useAuthController();
  return (
    <QueryClientProvider client={queryClient}>
      <AuthContext.Provider value={{ ...auth.state, dispatch: auth.dispatch }}>
        <AlertProvider>
          <Suspense>
            <BrowserRouter>
              <AppRoutes />
            </BrowserRouter>
          </Suspense>
        </AlertProvider>
      </AuthContext.Provider>
    </QueryClientProvider>
  );
};
export default App;
