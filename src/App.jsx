import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Menu } from 'lucide-react';
import Sidebar from './components/Sidebar';
import UserSwitcher from './components/UserSwitcher';
import ProtectedRoute from './components/ProtectedRoute';
import OrdersPage from './pages/OrdersPage';
import BillingPage from './pages/BillingPage';
import ReportsPage from './pages/ReportsPage';
import Unauthorized from './pages/Unauthorized';

function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <Router>
      <div className="flex h-screen bg-gray-50 font-sans text-gray-900 overflow-hidden">
        {/* Mobile overlay */}
        {isMobileMenuOpen && (
          <div 
            className="fixed inset-0 bg-black bg-opacity-50 z-20 md:hidden"
            onClick={() => setIsMobileMenuOpen(false)}
          ></div>
        )}
        
        {/* Sidebar */}
        <div className={`fixed inset-y-0 left-0 transform ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'} md:relative md:translate-x-0 transition duration-200 ease-in-out z-30 md:z-0`}>
          <Sidebar onClose={() => setIsMobileMenuOpen(false)} />
        </div>
        
        <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
          {/* Top Navbar for User Switcher */}
          <header className="h-16 bg-white border-b border-gray-200 flex items-center justify-between md:justify-end px-4 md:px-6 shadow-sm z-10 shrink-0">
            <button 
              className="md:hidden p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg"
              onClick={() => setIsMobileMenuOpen(true)}
            >
              <Menu size={24} />
            </button>
            <UserSwitcher />
          </header>
          
          {/* Main Content Area */}
          <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-50 p-4 md:p-6">
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
