import React, { createContext, useState, useContext } from 'react';
import { mockUsers } from '../data/mockUsers';

const PermissionContext = createContext();

export const PermissionProvider = ({ children }) => {
  const [currentUserKey, setCurrentUserKey] = useState('userA');
  const currentUser = mockUsers[currentUserKey];
  const modules = currentUser?.modules || [];

  const hasPermission = (moduleName, action) => {
    const targetModule = modules.find(
      (m) => m.name.toLowerCase() === moduleName.toLowerCase()
    );
    if (!targetModule) return false;
    return targetModule.permission?.includes(action) || false;
  };

  const setUser = (userKey) => {
    if (mockUsers[userKey]) {
      setCurrentUserKey(userKey);
    } else {
      console.error(`User key "${userKey}" not found in mockUsers.`);
    }
  };

  return (
    <PermissionContext.Provider
      value={{
        currentUser,
        modules,
        hasPermission,
        setUser,
        currentUserKey // Optional, useful for UI active state
      }}
    >
      {children}
    </PermissionContext.Provider>
  );
};

export const usePermission = () => {
  return useContext(PermissionContext);
};
