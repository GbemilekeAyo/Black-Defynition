import React from 'react';
import ContestantLayout from '../../layouts/ContestantLayout';
import ContestantDashboard from '../../components/contestant/ContestantDashboard';

function ContestantDashboardPage() {
  return (
    <ContestantLayout>
      <div className="container mx-auto p-4">
        <h2 className="text-3xl font-semibold mb-4">Contestant Dashboard</h2>
        <ContestantDashboard />
        {/* Display Contestant's information */}
      </div>
    </ContestantLayout>
  );
}

export default ContestantDashboardPage;

