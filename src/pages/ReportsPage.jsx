import React from 'react';
import { usePermission } from '../context/PermissionContext';

const ReportsPage = () => {
  const { hasPermission } = usePermission();

  return (
    <div className="p-6 bg-white rounded-xl shadow-sm border border-gray-100 min-h-full">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Reports Page</h1>
        <div className="flex space-x-3">
          {hasPermission('Reports', 'CREATE') && (
            <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors shadow-sm">
              Create Report
            </button>
          )}
        </div>
      </div>
      
      <p className="text-gray-600 mb-6">Analytics and business reports are shown here.</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Placeholder Report Card */}
        <div className="p-4 border border-gray-200 rounded-lg flex justify-between items-center bg-gray-50">
          <div>
            <h3 className="font-semibold text-gray-800">Q3 Financial Summary</h3>
            <p className="text-xs text-gray-500 mt-1">Generated: Oct 1, 2026</p>
          </div>
          {hasPermission('Reports', 'DELETE') && (
            <button className="px-3 py-1.5 text-red-600 bg-red-50 hover:bg-red-100 border border-red-200 font-medium rounded-md text-sm transition-colors">
              Delete
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ReportsPage;
