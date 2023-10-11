import React from 'react';
import AdminLayout from '../../layouts/AdminLayout';
import CreateCategory from '../../components/categories/CreateCategory';

function CreateCategoryPage() {
  return (
    <AdminLayout>
      <div className="container mx-auto p-4">
        <h2 className="text-3xl font-semibold mb-4">Create Contest Category</h2>
        <CreateCategory />
        {/* Include a form for creating a new contest category */}
      </div>
    </AdminLayout>
  );
}

export default CreateCategoryPage;

