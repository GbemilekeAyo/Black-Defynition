import React from 'react';
import DefaultLayout from '../../layouts/DefaultLayout';
import ContestList from '../../components/contest/ContestList';

function ContestListPage() {
  return (
    <DefaultLayout>
      <div className="container mx-auto p-4">
        <h2 className="text-3xl font-semibold mb-4">Contest Categories</h2>
        <ContestList />
        {/* List of contest categories with options to view details or vote */}
      </div>
    </DefaultLayout>
  );
}

export default ContestListPage;

