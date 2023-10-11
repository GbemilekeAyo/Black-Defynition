import React from 'react';
import Navbar from '../common/Navbar';
import Footer from '../common/Footer';

function ContestantLayout({ children }) {
  return (
    <div className="bg-gray-100">
      <Navbar />
      <div className="container mx-auto p-4">{children}</div>
      <Footer />
    </div>
  );
}

export default ContestantLayout;

