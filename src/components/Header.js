// src/components/Header.js
import React from 'react';
import './style.css';

function Header() {
  return (
    <header>
        <div className="navbar">
        <div className="logo">Find JOB</div>
        <ul className="menu">
            <li><a href="/jobs">Browse Jobs</a></li>
            <li><a href="#">Employers</a></li>
            <li><a href="#">Jobseekers</a></li>
            <li><a href="#">Career Advice</a></li>
            <li><a href="#">Product</a></li>
            <li><a href="#">Contact Us</a></li>
        </ul>
        <div className="auth">
            <li><a href="#">Sign In</a></li>
        </div>
        </div>
    </header>
  );
}

export default Header;
