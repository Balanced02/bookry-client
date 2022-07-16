import DashboardLayout from 'layout/BookLayout';
import Landing from 'pages/Landing';
import Signup from 'modules/Auth/Signup';
import React from 'react';
import { Route, Routes } from 'react-router';

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
