import React from 'react';
import Navbar from '../common/Navbar';
import Footer from '../common/Footer';

function AdminLayout({ children }) {
  return (
    <div className="bg-gray-100">
      <Navbar />
      <div className="container mx-auto p-4">
        <div className="flex">
          {/* Admin-specific sidebar */}
          <div className="w-1/4 bg-gray-300 p-4">
          </div>
          <div className="w-3/4 p-4">
            {children}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default AdminLayout;

