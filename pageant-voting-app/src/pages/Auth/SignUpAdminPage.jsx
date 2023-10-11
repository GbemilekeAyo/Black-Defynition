import React from 'react';
import DefaultLayout from '../../layouts/DefaultLayout';
import SignUpAdmin from '../../components/Auth/SignUpAdmin';

function SignUpAdminPage() {
  return (
    <DefaultLayout>
      <div className="container mx-auto p-4">
        <h2 className="text-3xl font-semibold mb-4">Admin Registration</h2>
        <SignUpAdmin />
      </div>
    </DefaultLayout>
  );
}

export default SignUpAdminPage;

