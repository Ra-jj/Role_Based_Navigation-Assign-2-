import React from 'react';
import { NavLink } from 'react-router-dom';
import { usePermission } from '../context/PermissionContext';

const Sidebar = () => {
  const { modules, hasPermission } = usePermission();

  return (
    <aside className="w-64 bg-gray-900 text-white min-h-screen flex flex-col shadow-xl flex-shrink-0">
      <div className="p-6 border-b border-gray-800">
        <h2 className="text-2xl font-bold tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">
          AdminPanel
        </h2>
      </div>
      
      <nav className="flex-1 px-4 py-6 space-y-2 overflow-y-auto">
        {modules.map((module) => {
          if (!hasPermission(module.name, 'VIEW')) return null;
          
          const path = `/${module.name.toLowerCase()}`;
          return (
            <NavLink
              key={module.name}
              to={path}
              className={({ isActive }) => 
                `block px-4 py-3 rounded-lg transition-all duration-200 ${
                  isActive 
                    ? 'bg-blue-600 text-white shadow-md' 
                    : 'text-gray-300 hover:bg-gray-800 hover:text-white'
                }`
              }
            >
              <span className="font-medium">{module.name}</span>
            </NavLink>
          );
        })}
      </nav>
      
      <div className="p-4 border-t border-gray-800 text-sm text-gray-500 text-center">
        Role Based Nav
      </div>
    </aside>
  );
};

export default Sidebar;
