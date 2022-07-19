import { AlertsContainer } from 'components/Alert';
import { AlertProvider } from 'context/AlertContext';
import BookLayout from 'layout/BookLayout';
import Landing from 'pages/Landing';
import React from 'react';
import { Route, Routes } from 'react-router';

const AppRoutes = () => {
  return (
    <AlertProvider>
      <AlertsContainer />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/book/:id" element={<BookLayout />} />
      </Routes>
    </AlertProvider>
  );
};

export default AppRoutes;
