import React, { Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { QueryClientProvider } from '@tanstack/react-query';
import AppRoutes from 'AppRoutes';
import { queryClient } from 'services/queryClient';
import AuthContext from 'modules/Auth/context/AuthContext';
import useAuthController from 'modules/Auth/context/useAuthController';
import 'assets/styles/bookry.scss';

const App = () => {
  const auth = useAuthController();
  return (
    <QueryClientProvider client={queryClient}>
      <AuthContext.Provider value={{ state: auth.state, dispatch: auth.dispatch }}>
        <Suspense>
          <BrowserRouter>
            <AppRoutes />
          </BrowserRouter>
        </Suspense>
      </AuthContext.Provider>
    </QueryClientProvider>
  );
};
export default App;
