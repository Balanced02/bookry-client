import React from 'react';
import AuthContext from 'modules/Auth/context/AuthContext';
import { useContext } from 'react';
import { useLocation, Navigate } from 'react-router-dom';

const PrivateRoute = ({ children }: { children: JSX.Element }) => {
  const { token, pageReady } = useContext(AuthContext);
  const location = useLocation();

  if (!pageReady) {
    return <div>Loading</div>;
  } else if (!token) {
    return <Navigate to="/signin" state={location} replace />;
  } else {
    return children;
  }
};

export default PrivateRoute;
