**Job Bookmarking App**
This is a job bookmarking app built using React.js, which allows users to browse jobs, search jobs by location or keywords, filter them, and bookmark jobs for offline viewing. The app features an infinite scroll, filtering, and bookmarking system.

**Features**
  Job Listings: Browse jobs fetched from an API.
  Search and Filter: Filter jobs based on search term, location, job type, and skills.
  Infinite Scroll: Jobs load dynamically as you scroll down the page.
  Bookmark Jobs: Add or remove jobs from bookmarks for offline access.
  Job Details: View detailed information for a selected job.
  Responsive UI: Optimized for different screen sizes.
  Pagination: Handles paginated job fetching from the API.
**Tech Stack**
  Frontend: React.js
  Styling: CSS (with a style.css file)
  API: Axios for making requests to the job listings API

Before running the project, make sure you have the following installed:
  ->Node.js: v14+
  ->npm or yarn: Package manager to install dependencies
  
**Installation**
  **Clone the repository:**
    ->git clone https://github.com/singaramdivya/jobboardapp.git
    ->cd job-bookmarking-app
    
**Install dependencies:**
  npm install 
  npm install react-router-dom
  npm install axios

**Running the Application**
  npm start

**Open your browser and navigate to:**
  http://localhost:3000
  
**File Structure**

├── public
│   ├── index.html
│   └── Desktop-karir.png
├── src
│   ├── components
│   │   ├── api.js
│   │   ├── Bookmarks.js
│   │   ├── Filter.js
│   │   ├── Footer.js
│   │   ├── Header.js
│   │   ├── JobCard.js
│   │   ├── JobDetails.js
│   │   ├── Jobs.js
│   ├── pages
│   │   └── HomePage.js
│   ├── utils
│   │   └── storage.js
│   ├── App.js
│   ├── index.js
│   └── style.css

**Key Components**
  Jobs.js: Lists jobs, handles infinite scroll, and job bookmarking.
  Bookmarks.js: Displays bookmarked jobs and allows users to remove them.
  JobCard.js: Displays individual job details and bookmark actions.
  JobDetails.js: Shows detailed information about a selected job.
  Filter.js: Allows users to filter jobs based on different criteria.
  api.js: Fetches jobs from the API.
**Bookmarking**
  Bookmarks are stored locally using browser local storage. No backend is needed for this feature.
