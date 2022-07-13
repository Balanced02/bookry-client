import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import AppRoutes from 'AppRoutes';
import './assets/styles/bookry.scss';

const App = () => (
  <BrowserRouter>
    <AppRoutes />
  </BrowserRouter>
);
export default App;
