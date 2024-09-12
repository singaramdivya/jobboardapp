import React, { useEffect, useState } from 'react';
import axios from 'axios';
import JobCard from './JobCard';
import { saveJob, isJobBookmarked ,removeJob} from '../utils/storage';
import JobDetail from './JobDetail';
import Filter from './Filter';
import './style.css';

const Jobs = () => {
  const [jobs, setJobs] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [selectedJob, setSelectedJob] = useState(null);
  const [hasMore, setHasMore] = useState(true); 
  const [searchTerm, setSearchTerm] = useState('');
  const [location, setLocation] = useState('');
  const [radius, setRadius] = useState(50);
  const [setFilters] = useState()

  const handleReset = () => {
    setSearchTerm('');
    setLocation('');
    setRadius(50);
    setFilters({ searchTerm: '', location: '', radius: 50 });
  };

  const handleSearch = () => {
    setFilters({ searchTerm, location, radius });
  };
const toggleBookmark = (jobId) => {
  if (isJobBookmarked(jobId)) {
    removeJob(jobId); // Remove job from bookmarks
  } else {
    const job = jobs.find((job) => job.id === jobId);
    saveJob(job); // Add job to bookmarks
  }
  // Trigger re-render to reflect bookmark status
  setJobs([...jobs]);
};
  useEffect(() => {
    fetchJobs();
  }, [page]);

  // Infinite scroll event listener
  useEffect(() => {
    const handleScroll = () => {
      if (window.innerHeight + window.scrollY >= document.body.scrollHeight - 500 && !loading && hasMore) {
        setPage(prevPage => prevPage + 1);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [loading, hasMore]);

  const fetchJobs = async () => {
    setLoading(true);
    try {
      const response = await axios.get(`https://testapi.getlokalapp.com/common/jobs?page=${page}`);
      const jobsData = response.data?.results || []; // Handle the API's response structure
      setJobs(prev => [...prev, ...jobsData]);

      if (jobsData.length === 0) {
        setHasMore(false);
      }

      setLoading(false);
    } catch (error) {
      console.error('Error fetching jobs:', error);
      setError('Failed to fetch jobs');
      setLoading(false);
    }
  };

  return (
    <div className="jobs-page">
      <div className='top-section'>
        <div className="filter-group">
          <label>Search Jobs</label>
          <input
            type="text"
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
            placeholder="Search jobs"
          />
        </div>

        <div className="filter-group">
          <label>Location</label>
          <input
            type="text"
            value={location}
            onChange={e => setLocation(e.target.value)}
            placeholder="City / Zip / Address"
          />
        </div>

        <div className="filter-group">
          <label>Radius</label>
          <select value={radius} onChange={e => setRadius(e.target.value)}>
            <option value={50}>50 km</option>
            <option value={100}>100 km</option>
            <option value={200}>200 km</option>
          </select>
        </div>
        <div className='button-section'>
          <button onClick={handleSearch} className="search-btn">
            Search
          </button>
          <button onClick={handleReset} className="reset-btn">
            Reset
          </button>
        </div>
      </div>
      <div className='down-section'>
        <div className='side-filter'>
          <Filter setFilters={setFilters} />
        </div>
        <div className="jobs-container">
        {jobs.length > 0 ? (
          jobs.map((job) => (
            <JobCard
              key={job.id}
              job={job}
              onBookmark={toggleBookmark}
              isBookmarked={isJobBookmarked(job.id)}
              context="jobs" // Pass 'jobs' as the context
            />
          ))
        ) : (
          <p>No jobs available</p>
        )}
        {loading && <p>Loading...</p>}
        {error && <p>{error}</p>}
    

          {selectedJob && <JobDetail job={selectedJob} onClose={() => setSelectedJob(null)} />}
        </div>
      </div>
    </div>
  );
};

export default Jobs;