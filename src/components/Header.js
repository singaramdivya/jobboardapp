import React, { useState } from 'react';
import './style.css';

function Header() {
  const [menuActive, setMenuActive] = useState(false);

  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };

  return (
    <header>
      <div className="navbar">
        <div className="logo">Find JOB</div>

        <ul className={`menu ${menuActive ? 'active' : 'hidden'}`}>
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

        <span className="menu-icon" onClick={toggleMenu}>
          &#9776;
        </span>
      </div>
    </header>
  );
}

export default Header;
