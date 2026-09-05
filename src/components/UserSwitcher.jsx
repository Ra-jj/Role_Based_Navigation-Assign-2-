import React from 'react';
import { usePermission } from '../context/PermissionContext';

const UserSwitcher = () => {
  const { currentUserKey, setUser, currentUser } = usePermission();

  return (
    <div className="flex items-center bg-white px-4 py-2 rounded-xl shadow-sm border border-gray-200">
      <div className="flex flex-col mr-4">
        <span className="text-[10px] text-gray-500 font-bold uppercase tracking-wider">Current User</span>
        <span className="text-sm font-extrabold text-gray-800">{currentUser.name}</span>
      </div>
      <div className="h-8 w-px bg-gray-200 mx-2"></div>
      <select 
        value={currentUserKey}
        onChange={(e) => setUser(e.target.value)}
        className="ml-2 p-2 bg-gray-50 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 cursor-pointer transition-shadow"
      >
        <option value="userA">User A (Admin)</option>
        <option value="userB">User B (Restricted)</option>
      </select>
    </div>
  );
};

export default UserSwitcher;
