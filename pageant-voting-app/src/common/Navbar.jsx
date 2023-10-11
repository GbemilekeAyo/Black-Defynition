import React from 'react';
import { BrowserRouter, Routes, Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="bg-primary-500 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-white text-2xl font-semibold">
          Pageant Voting System
        </Link>
        <div>
          <Link to="/categories" className="text-white mr-4 hover:underline">
            Contest Categories
          </Link>
          <Link to="/about" className="text-white hover:underline">
            About Us
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

