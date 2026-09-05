import React from 'react';
import { usePermission } from '../context/PermissionContext';

const OrdersPage = () => {
  const { hasPermission } = usePermission();

  return (
    <div className="p-6 bg-white rounded-xl shadow-sm border border-gray-100 min-h-full">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Orders Page</h1>
        {hasPermission('Orders', 'CREATE') && (
          <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors shadow-sm">
            + Create Order
          </button>
        )}
      </div>
      
      <div className="overflow-hidden border border-gray-200 rounded-lg">
        <table className="min-w-full divide-y divide-gray-200 text-sm text-left">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-4 py-3 font-medium text-gray-700">Order ID</th>
              <th className="px-4 py-3 font-medium text-gray-700">Customer</th>
              <th className="px-4 py-3 font-medium text-gray-700">Status</th>
              <th className="px-4 py-3 font-medium text-gray-700">Total</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 bg-white">
            <tr>
              <td className="px-4 py-3 text-gray-800 font-medium">#ORD-001</td>
              <td className="px-4 py-3 text-gray-600">Acme Corp</td>
              <td className="px-4 py-3"><span className="px-2 py-1 bg-green-100 text-green-700 rounded-full text-xs font-semibold">Shipped</span></td>
              <td className="px-4 py-3 text-gray-800">$1,250.00</td>
            </tr>
            <tr>
              <td className="px-4 py-3 text-gray-800 font-medium">#ORD-002</td>
              <td className="px-4 py-3 text-gray-600">Globex Inc</td>
              <td className="px-4 py-3"><span className="px-2 py-1 bg-yellow-100 text-yellow-700 rounded-full text-xs font-semibold">Pending</span></td>
              <td className="px-4 py-3 text-gray-800">$850.00</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default OrdersPage;
