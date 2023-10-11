import React from 'react';
import DefaultLayout from '../../layouts/DefaultLayout';
import CreateCategory from '../../components/categories/CreateCategory';

function CategoriesPage() {
  return (
    <DefaultLayout>
      <div className="container mx-auto p-4">
        <h2 className="text-3xl font-semibold mb-4">Manage Contest Categories</h2>
        <CreateCategory />
        {/* List existing categories and provide options for managing them */}
      </div>
    </DefaultLayout>
  );
}

export default CategoriesPage;

