import React from 'react';
import { Route, Routes } from 'react-router';
import Landing from 'pages/Landing';
import DashboardLayout from 'layout/BookLayout';
import Signup from 'modules/Auth/Signup';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/book" element={<DashboardLayout />} />
      <Route path="/signup" element={<Signup />} />
    </Routes>
  );
};

export default AppRoutes;
