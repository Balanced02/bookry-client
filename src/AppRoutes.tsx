import DashboardLayout from 'layout/BookLayout';
import Landing from 'pages/Landing';
import React from 'react';
import { Route, Routes } from 'react-router';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/book" element={<DashboardLayout />} />
    </Routes>
  );
};

export default AppRoutes;
