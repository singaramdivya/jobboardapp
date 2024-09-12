import React, { useState } from 'react';
import './style.css';

const Filter = () => {
  

  return (
    <div className="filters">
    
      <aside className="job-filters">
        
         <div className="filter-section">
           <h4>Remote</h4>
           <label><input type="checkbox" /> Remote Only</label>
         </div>
         <div className="filter-section">
           <h4>Type</h4>
           <label><input type="checkbox" /> Contract</label>
           <label><input type="checkbox" /> Full time</label>
           <label><input type="checkbox" /> Part time</label>
        </div>
         <div className="filter-section">
           <h4>Sector</h4>
           <label><input type="checkbox" /> Development</label>
           <label><input type="checkbox" /> Marketing</label>
           <label><input type="checkbox" /> SEO</label>
           <label><input type="checkbox" /> Others</label>
         </div>
         <div className="filter-section">
           <h4>Skills</h4>
           <label><input type="checkbox" /> HTML</label>
           <label><input type="checkbox" /> JavaScript</label>
           <label><input type="checkbox" /> CSS</label>
           <label><input type="checkbox" /> Others</label>
        </div>
      </aside>
    </div>
  );
};

export default Filter;
