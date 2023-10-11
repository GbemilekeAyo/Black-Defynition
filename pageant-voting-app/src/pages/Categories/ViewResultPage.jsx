import React from 'react';
import AdminLayout from '../../layouts/AdminLayout';
import ViewResults from '../../components/categories/ViewResults';

function ViewResultsPage() {
  return (
    <AdminLayout>
      <div className="container mx-auto p-4">
        <h2 className="text-3xl font-semibold mb-4">View Voting Results</h2>
        <ViewResults />
        {/* Include logic and UI to view the voting results for a specific category */}
      </div>
    </AdminLayout>
  );
}

export default ViewResultsPage;

