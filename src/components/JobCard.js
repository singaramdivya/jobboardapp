import React from 'react';
import { useNavigate } from 'react-router-dom';
import './style.css';

const JobCard = ({ job, onBookmark, isBookmarked, context }) => {
  const navigate = useNavigate();

  const handleJobClick = () => {
    navigate(`/job/${job.id}`);
  };

  const getBookmarkButtonLabel = () => {
    if (context === 'bookmarks') {
      return 'Remove Bookmark';
    }
    return isBookmarked ? 'Bookmarked' : 'Bookmark'; 
  };

  return (
    <div className="job-card" onClick={handleJobClick}>
      <h3>{job.title}</h3>
      <p>
        <strong>Location:</strong> {job.primary_details?.Place || 'Location not provided'}
      </p>
      <p>
        <strong>Salary:</strong> {job.primary_details?.Salary || 'Salary not provided'}
      </p>
      <p>
        <strong>Phone:</strong> {job.whatsapp_no || 'Phone not available'}
      </p>
      <button
        onClick={(e) => {
          e.stopPropagation();
          onBookmark(job.id); 
        }}
      >
        {getBookmarkButtonLabel()}
      </button>
    </div>
  );
};

export default JobCard;


