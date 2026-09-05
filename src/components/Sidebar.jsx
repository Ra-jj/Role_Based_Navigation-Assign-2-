import React from 'react';
import { NavLink } from 'react-router-dom';
import { usePermission } from '../context/PermissionContext';
import { ShoppingCart, Receipt, BarChart2, ShieldAlert, X } from 'lucide-react';

const Sidebar = ({ onClose }) => {
  const { modules, hasPermission } = usePermission();

  const getIconForModule = (name) => {
    switch (name.toLowerCase()) {
      case 'orders': return <ShoppingCart size={20} />;
      case 'billing': return <Receipt size={20} />;
      case 'reports': return <BarChart2 size={20} />;
      default: return <ShieldAlert size={20} />;
    }
  };

  // Filter modules that have VIEW permission
  const viewableModules = modules.filter(module => hasPermission(module.name, 'VIEW'));

  return (
    <aside className="w-64 bg-gray-900 text-white h-full flex flex-col shadow-xl">
      <div className="p-6 border-b border-gray-800 flex justify-between items-center">
        <h2 className="text-2xl font-bold tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">
          AdminPanel
        </h2>
        {/* Mobile close button */}
        <button className="md:hidden text-gray-400 hover:text-white" onClick={onClose}>
          <X size={24} />
        </button>
      </div>
      
      <nav className="flex-1 px-4 py-6 space-y-2 overflow-y-auto">
        {viewableModules.length === 0 ? (
          <div className="text-center text-gray-500 py-8 px-4 bg-gray-800 rounded-lg border border-gray-700">
            <ShieldAlert className="mx-auto mb-3 text-gray-500" size={32} />
            <p className="text-sm font-medium text-gray-400">No modules available</p>
            <p className="text-xs mt-1">Please contact your administrator for access.</p>
          </div>
        ) : (
          viewableModules.map((module) => {
            const path = `/${module.name.toLowerCase()}`;
            return (
              <NavLink
                key={module.name}
                to={path}
                onClick={onClose} // Close sidebar on mobile after clicking
                className={({ isActive }) => 
                  `flex items-center px-4 py-3 rounded-lg transition-all duration-200 ${
                    isActive 
                      ? 'bg-blue-600 text-white shadow-md' 
                      : 'text-gray-300 hover:bg-gray-800 hover:text-white'
                  }`
                }
              >
                <span className="mr-3">{getIconForModule(module.name)}</span>
                <span className="font-medium">{module.name}</span>
              </NavLink>
            );
          })
        )}
      </nav>
      
      <div className="p-4 border-t border-gray-800 text-sm text-gray-500 text-center">
        Role Based Nav
      </div>
    </aside>
  );
};

export default Sidebar;
