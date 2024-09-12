export const saveJob = (job) => {
  const bookmarkedJobs = JSON.parse(localStorage.getItem('bookmarkedJobs')) || [];
  localStorage.setItem('bookmarkedJobs', JSON.stringify([...bookmarkedJobs, job]));
};

export const getBookmarkedJobs = () => {
  return JSON.parse(localStorage.getItem('bookmarkedJobs')) || [];
};

export const removeJob = (jobId) => {
  const bookmarkedJobs = JSON.parse(localStorage.getItem('bookmarkedJobs')) || [];
  const updatedJobs = bookmarkedJobs.filter(job => job.id !== jobId);
  localStorage.setItem('bookmarkedJobs', JSON.stringify(updatedJobs));
};

export const isJobBookmarked = (jobId) => {
  const bookmarkedJobs = JSON.parse(localStorage.getItem('bookmarkedJobs')) || [];
  return bookmarkedJobs.some(job => job.id === jobId);
};
