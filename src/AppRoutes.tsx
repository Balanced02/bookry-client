import React from 'react';
import { Route, Routes } from 'react-router';
import { AlertsContainer } from 'components/Alert';
import { AlertProvider } from 'context/AlertContext';
import BookLayout from 'layout/BookLayout';
import Landing from 'pages/Landing';
import Signup from 'modules/Auth/Signup';
import SignIn from 'modules/Auth/SignIn';
import ForgotPassword from 'modules/Auth/ForgotPassword';

const AppRoutes = () => {
  return (
    <AlertProvider>
      <AlertsContainer />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/book/:id" element={<BookLayout />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/forgotpassword" element={<ForgotPassword />} />
      </Routes>
    </AlertProvider>
  );
};

export default AppRoutes;
