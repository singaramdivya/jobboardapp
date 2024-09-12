import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const JobDetail = () => {
  const { id } = useParams(); 
  const [job, setJob] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    fetchJobDetail();
  }, [id]);

  const fetchJobDetail = async () => {
    try {
      const response = await axios.get(`https://testapi.getlokalapp.com/common/jobs/${id}`);
      
      const jobArray = response.data.results;
      const job = jobArray.find((item) => item.id === parseInt(id)); 
      console.log(job)
      
      if (job) {
        setJob(job);
      } else {
        setError('Job not found');
      }
      
      setLoading(false);
    } catch (error) {
      console.error('Error fetching job details:', error);
      setError('Failed to fetch job details');
      setLoading(false);
    }
  };
  

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  if (!job) {
    return <p>Job not found</p>;
  }

  return (
    <div className="job-detail">
      <h2>{job.title}</h2>
      <p>
        <strong>Location:</strong> {job.primary_details?.Place || 'Location not provided'}
      </p>
      <p>
        <strong>Salary:</strong> {job.primary_details?.Salary || 'Salary not provided'}
      </p>
      <p>
        <strong>Phone:</strong> {job.whatsapp_no || 'Phone not available'}
      </p>
      <p>
        <strong>Description:</strong> {job.contentV3?.V3.find(detail => detail.field_key === 'Other details')?.field_value || 'No description available'}
      </p>
      {job.creatives && job.creatives.length > 0 && (
        <div className='image-container'>
          <img src={job.creatives[0].file} alt="Job"/>
        </div>
      )}
    </div>
  );
};

export default JobDetail;



