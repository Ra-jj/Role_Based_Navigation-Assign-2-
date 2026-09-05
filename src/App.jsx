import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import UserSwitcher from './components/UserSwitcher';
import ProtectedRoute from './components/ProtectedRoute';
import OrdersPage from './pages/OrdersPage';
import BillingPage from './pages/BillingPage';
import ReportsPage from './pages/ReportsPage';
import Unauthorized from './pages/Unauthorized';

function App() {
  return (
    <Router>
      <div className="flex h-screen bg-gray-50 font-sans text-gray-900">
        <Sidebar />
        
        <div className="flex-1 flex flex-col overflow-hidden">
          {/* Top Navbar for User Switcher */}
          <header className="h-16 bg-white border-b border-gray-200 flex items-center justify-end px-6 shadow-sm z-10">
            <UserSwitcher />
          </header>
          
          {/* Main Content Area */}
          <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-50 p-6">
            <Routes>
              <Route path="/" element={<Navigate to="/orders" replace />} />
              
              <Route 
                path="/orders" 
                element={
                  <ProtectedRoute moduleName="Orders">
                    <OrdersPage />
                  </ProtectedRoute>
                } 
              />
              
              <Route 
                path="/billing" 
                element={
                  <ProtectedRoute moduleName="Billing">
                    <BillingPage />
                  </ProtectedRoute>
                } 
              />
              
              <Route 
                path="/reports" 
                element={
                  <ProtectedRoute moduleName="Reports">
                    <ReportsPage />
                  </ProtectedRoute>
                } 
              />
              
              <Route path="/unauthorized" element={<Unauthorized />} />
              <Route path="*" element={<Navigate to="/unauthorized" replace />} />
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
}

export default App;
