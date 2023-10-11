import React from 'react';
import DefaultLayout from '../../layouts/DefaultLayout';
import LoginVoter from '../../components/Auth/LoginVoter';

function LoginVoterPage() {
  return (
    <DefaultLayout>
      <div className="container mx-auto p-4">
        <h2 className="text-3xl font-semibold mb-4">Voter Login</h2>
        <LoginVoter />
      </div>
    </DefaultLayout>
  );
}

export default LoginVoterPage;

