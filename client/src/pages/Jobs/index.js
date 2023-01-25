import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Job from 'pages/Jobs/Job';
import './index.scss';

// API GET Route
// http://localhost:3001/api/v1/users/jobs;

const Jobs = () => {
  const [jobs, setJobs] = useState([]);
  const [openJob, setOpenJob] = useState(null);
  console.log({ jobs });
  useEffect(() => {
    const fetchJobs = async () => {
      const res = await axios.get('/users/jobs');
      setJobs(res.data.jobs);
    };
    fetchJobs();
  }, []);

  const toggleJob = (job) => {
    if (openJob === job) {
      setOpenJob(null);
    } else {
      setOpenJob(job);
    }
  };

  return (
    <div className="jobs">
      {jobs.length ? (
        jobs.map((job, i) => (
          <Job
            {...job}
            key={i}
            isOpen={job.applyUrl === openJob}
            onClickHeader={() => toggleJob(job.applyUrl)}
          />
        ))
      ) : (
        // TODO: add loading spinner
        <div>Loading...</div>
      )}
    </div>
  );
};

export default Jobs;
