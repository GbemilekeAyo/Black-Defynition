import React from 'react';
import AdminLayout from '../../layouts/AdminLayout';
import EndCategory from '../../components/categories/EndCategory';

function EndCategoryPage() {
  return (
    <AdminLayout>
      <div className="container mx-auto p-4">
        <h2 className="text-3xl font-semibold mb-4">End Contest Category</h2>
        <EndCategory />
        {/* Include logic and UI to end the voting for a specific category */}
      </div>
    </AdminLayout>
  );
}

export default EndCategoryPage;

