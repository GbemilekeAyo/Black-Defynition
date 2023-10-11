import React from 'react';
import AdminLayout from '../../layouts/AdminLayout';
import AdminDashboard from '../../components/admin/AdminDashboard';

function AdminDashboardPage() {
  return (
    <AdminLayout>
      <div className="container mx-auto p-4">
        <h2 className="text-3xl font-semibold mb-4">Admin Dashboard</h2>
        <AdminDashboard />
        {/* Provide Admin functionality for category management, voting control, and result viewing */}
      </div>
    </AdminLayout>
  );
}

export default AdminDashboardPage;

