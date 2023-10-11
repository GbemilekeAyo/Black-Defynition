import React from 'react';
import DefaultLayout from '../../layouts/DefaultLayout';
import SignUpContestant from '../../components/Auth/SignUpContestant';

function SignUpContestantPage() {
  return (
    <DefaultLayout>
      <div className="container mx-auto p-4">
        <h2 className="text-3xl font-semibold mb-4">Contestant Registration</h2>
        <SignUpContestant />
      </div>
    </DefaultLayout>
  );
}

export default SignUpContestantPage;

