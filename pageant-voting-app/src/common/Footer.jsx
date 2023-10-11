import React from 'react';

function Footer() {
  return (
    <footer className="bg-primary-500 p-4">
      <div className="container mx-auto">
        <p className="text-white text-center">
          &copy; {new Date().getFullYear} Pageant Voting System. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;

