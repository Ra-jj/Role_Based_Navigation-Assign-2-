import React from 'react';
import { usePermission } from '../context/PermissionContext';

const BillingPage = () => {
  const { hasPermission } = usePermission();

  // Determine if the user has CREATE permission
  const canCreate = hasPermission('Billing', 'CREATE');

  return (
    <div className="p-6 bg-white rounded-xl shadow-sm border border-gray-100 min-h-full">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Billing Page</h1>
        {canCreate && (
          <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors shadow-sm">
            Create Invoice
          </button>
        )}
      </div>
      
      {!canCreate && (
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
          <p className="text-blue-800 text-sm font-medium">
            ℹ️ You have read-only access to this module. No actions are currently available.
          </p>
        </div>
      )}

      <p className="text-gray-600">View your invoices and billing information here.</p>
    </div>
  );
};

export default BillingPage;
