import { useState } from 'react'
import './App.css'
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Import your custom pages
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';

// Import Auth pages
import SignUpAdminPage from './pages/Auth/SignUpAdminPage';
import LoginAdminPage from './pages/Auth/LoginAdminPage';
import SignUpVoterPage from './pages/Auth/SignUpVoterPage';
import LoginVoterPage from './pages/Auth/LoginVoterPage';
import SignUpContestantPage from './pages/Auth/SignUpContestantPage';
import LoginContestantPage from './pages/Auth/LoginContestantPage';

// Import Contest pages
import CategoriesPage from './pages/Contest/CategoriesPage';
import ContestListPage from './pages/Contest/ContestListPage';

// Import Contestant and Admin pages
import ContestantDashboardPage from './pages/Contestant/ContestantDashboardPage';
import AdminDashboardPage from './pages/Admin/AdminDashboardPage';

function App() {
  return (
    <BrowserRouter>
      <div className="bg-gray-100 min-h-screen">
        <Routes>
          {/* Public routes */}
          <Route path="/" element={<Home />} />
          <Route path="about-us" element={<AboutUs />} />

          {/* Auth routes */}
          <Route path="auth/signup/admin" element={<SignUpAdminPage />} />
          <Route path="auth/login/admin" element={<LoginAdminPage />} />
          <Route path="auth/signup/voter" element={<SignUpVoterPage />} />
          <Route path="auth/login/voter" element={<LoginVoterPage />} />
          <Route path="auth/signup/contestant" element={<SignUpContestantPage />} />
          <Route path="auth/login/contestant" element={<LoginContestantPage />} />

          {/* Contest routes */}
          <Route path="categories" element={<CategoriesPage />} />
          <Route path="categories/:categoryId" element={<ContestListPage />} />
          <Route path="categories/:categoryId/contestants" element={<ContestDetailsPage />} />         

          {/* Contestant dashboard route */}
          <Route path="contestant/dashboard" element={<ContestantDashboardPage />} />

          {/* Admin dashboard route */}
          <Route path="admin/dashboard" element={<AdminDashboardPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

