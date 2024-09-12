import React, { useEffect } from 'react';
import { useLocation, Route, Routes } from 'react-router-dom';
import Jobs from './components/Jobs';
import Bookmarks from './components/Bookmarks';
import JobDetail from './components/JobDetail'; 
import HomePage from './components/HomePage';
import './App.css';  

const ScrollControl = () => {
  const location = useLocation(); 

  useEffect(() => {
    if (location.pathname === '/') {
      // Disable scrolling on the homepage
      document.body.style.overflow = 'hidden';
    } else {
      // Enable scrolling on other pages like Jobs
      document.body.style.overflow = 'auto';
    }
  }, [location.pathname]);

  return null;
};

const App = () => {
  return (
    <div>
      <ScrollControl /> {/* This controls the scroll behavior */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/jobs" element={<Jobs />} />
        <Route path="/bookmarks" element={<Bookmarks />} />
        <Route path="/job/:id" element={<JobDetail />} /> 
      </Routes>
    </div>
  );
};

export default App;
