import React from 'react';
import DefaultLayout from '../../layouts/DefaultLayout';
import LoginAdmin from '../../components/Auth/LoginAdmin';

function LoginAdminPage() {
  return (
    <DefaultLayout>
      <div className="container mx-auto p-4">
        <h2 className="text-3xl font-semibold mb-4">Admin Login</h2>
        <LoginAdmin />
      </div>
    </DefaultLayout>
  );
}

export default LoginAdminPage;

