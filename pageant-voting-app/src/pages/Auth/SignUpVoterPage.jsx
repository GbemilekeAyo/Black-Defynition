import React from 'react';
import DefaultLayout from '../../layouts/DefaultLayout';
import SignUpVoter from '../../components/Auth/SignUpVoter';

function SignUpVoterPage() {
  return (
    <DefaultLayout>
      <div className="container mx-auto p-4">
        <h2 className="text-3xl font-semibold mb-4">Voter Registration</h2>
        <SignUpVoter />
      </div>
    </DefaultLayout>
  );
}

export default SignUpVoterPage;

