import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { usePermission } from '../context/PermissionContext';

const ProtectedRoute = ({ moduleName, children }) => {
  const { hasPermission } = usePermission();

  if (!hasPermission(moduleName, 'VIEW')) {
    return <Navigate to="/unauthorized" replace />;
  }

  return children ? children : <Outlet />;
};

export default ProtectedRoute;
