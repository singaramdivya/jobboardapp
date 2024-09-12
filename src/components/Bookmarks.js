import React, { useState, useEffect } from 'react';
import { getBookmarkedJobs, removeJob } from '../utils/storage';
import JobCard from './JobCard';
import './style.css';

const Bookmarks = () => {
  const [bookmarkedJobs, setBookmarkedJobs] = useState([]);

  useEffect(() => {
    setBookmarkedJobs(getBookmarkedJobs());
  }, []);

  const handleRemoveBookmark = (jobId) => {
    removeJob(jobId);
    setBookmarkedJobs(getBookmarkedJobs()); 
  };

  return (
    <div className="bookmarks-container">
      <h1>Bookmark List</h1>
      {bookmarkedJobs.length === 0 ? (
        <p>No bookmarks found</p>
      ) : (
        bookmarkedJobs.map((job) => (
          <JobCard
            key={job.id}
            job={job}
            onBookmark={handleRemoveBookmark}
            isBookmarked={true}
            context="bookmarks"
          />
        ))
      )}
    </div>
  );
};

export default Bookmarks;
