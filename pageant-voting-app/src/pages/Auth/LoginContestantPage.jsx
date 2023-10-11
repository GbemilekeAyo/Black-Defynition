import React from 'react';
import DefaultLayout from '../../layouts/DefaultLayout';
import LoginContestant from '../../components/Auth/LoginContestant';

function LoginContestantPage() {
  return (
    <DefaultLayout>
      <div className="container mx-auto p-4">
        <h2 className="text-3xl font-semibold mb-4">Contestant Login</h2>
        <LoginContestant />
      </div>
    </DefaultLayout>
  );
}

export default LoginContestantPage;

