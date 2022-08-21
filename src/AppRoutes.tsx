import React from 'react';
import { Route, Routes } from 'react-router';
import { AlertsContainer } from 'components/Alert';
import { AlertProvider } from 'context/AlertContext';
import BookLayout from 'layout/BookLayout';
import Landing from 'pages/Landing';
import Signup from 'modules/Auth/Signup';
import SignIn from 'modules/Auth/SignIn';
import ForgotPassword from 'modules/Auth/ForgotPassword';
import NewPassword from 'modules/Auth/NewPassword';
import ConfirmEmail from 'modules/Auth/ConfirmEmail';

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
        <Route path="/newpassword" element={<NewPassword />} />
        <Route path="/confirmemail" element={<ConfirmEmail />} />
      </Routes>
    </AlertProvider>
  );
};

export default AppRoutes;
