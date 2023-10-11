import React from 'react';
import VoterLayout from '../../layouts/VoterLayout';
import VoteContestant from '../../components/Vote/VoteContestant';

function VoteContestantPage() {
  return (
    <VoterLayout>
      <div className="container mx-auto p-4">
        <h2 className="text-3xl font-semibold mb-4">Vote for Contestants</h2>
        <VoteContestant />
        {/* Display contest categories and allow voters to cast their votes */}
      </div>
    </VoterLayout>
  );
}

export default VoteContestantPage;

