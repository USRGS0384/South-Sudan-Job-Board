import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const JobDetails = () => {
  const { id } = useParams();
  const [job, setJob] = useState(null);

  useEffect(() => {
    axios.get(`/api/jobs/${id}`).then((response) => setJob(response.data));
  }, [id]);

  if (!job) return <p>Loading...</p>;

  return (
    <div>
      <h1>{job.title}</h1>
      <p>{job.description}</p>
      <p>{job.location}</p>
      <p>Deadline: {new Date(job.deadline).toDateString()}</p>
    </div>
  );
};

export default JobDetails;
