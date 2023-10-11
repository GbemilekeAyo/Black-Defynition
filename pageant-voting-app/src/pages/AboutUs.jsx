import React from 'react';
import DefaultLayout from '../layouts/DefaultLayout';

function AboutUs() {
  return (
    <DefaultLayout>
      <div className="container mx-auto text-center p-4">
        <h2 className="text-3xl font-semibold mb-4">About Us</h2>
        <p className="text-lg">
          Pageant Voting System is a platform designed to facilitate fair and transparent voting for contestants in various categories.
        </p>
        <p className="text-lg mt-4">
          If you have any questions or need assistance, please contact us at contact@pageantvoting.com.
        </p>
      </div>
    </DefaultLayout>
  );
}

export default AboutUs;

