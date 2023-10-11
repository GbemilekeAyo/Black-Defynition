import React from 'react';
import DefaultLayout from '../layouts/DefaultLayout';

function Home() {
  return (
    <DefaultLayout>
      <div className="text-center">
        <h1 className="text-4xl font-semibold mb-4">Welcome to Pageant Voting System</h1>
        <p className="text-lg">
          Cast your vote for your favorite contestants in various categories.
        </p>
        <p className="text-lg mt-4">Sign up and get started now!</p>
      </div>
    </DefaultLayout>
  );
}

export default Home;

