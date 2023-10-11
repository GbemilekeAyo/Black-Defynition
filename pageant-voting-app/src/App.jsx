import { useState } from 'react'
import './App.css'
import React from 'react';
import { Routes } from 'react-router-dom';

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
    <Router>
      <div className="bg-gray-100 min-h-screen">
        <Routes>
          {/* Public routes */}
          <Route path="/" exact component={Home} />
          <Route path="about-us" exact component={AboutUs} />

          {/* Auth routes */}
          <Route path="auth/signup/admin" exact component={SignUpAdminPage} />
          <Route path="auth/login/admin" exact component={LoginAdminPage} />
          <Route path="auth/signup/voter" exact component={SignUpVoterPage} />
          <Route path="auth/login/voter" exact component={LoginVoterPage} />
          <Route path="auth/signup/contestant" exact component={SignUpContestantPage} />
          <Route path="auth/login/contestant" exact component={LoginContestantPage} />

          {/* Contest routes */}
          <Route path="categories" exact component={CategoriesPage} />
          <Route path="categories/:categoryId" exact component={ContestListPage} />
          <Route path="categories/:categoryId/contestants" exact component={ContestDetailsPage} />

          {/* Contestant dashboard route */}
          <Route path="contestant/dashboard" exact component={ContestantDashboardPage} />

          {/* Admin dashboard route */}
          <Route path="admin/dashboard" exact component={AdminDashboardPage} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

