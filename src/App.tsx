import React, { useEffect } from 'react';
import { Container, Box } from '@mui/material';
import axios from 'axios';
import JobCard from './components/JobCard.component';
import { JobDtoSchema, JobsDtoSchema } from './dto/FetchJob';


function App() {
  const [data, setData] = React.useState<any>([]);
  const fetchData = async () => {
    try {
      const result = await axios(
        'http://localhost:3001/jobs',
      );
      setData(result.data);
    } catch (error) {
      console.log(error);
    }

  };
  useEffect(() => {
    fetchData();
  }, []);
  // Parse and validate the data
  const jobs = JobsDtoSchema.parse(data);
  console.log(jobs);
  const displayJobs = () => {
    return jobs.map((job) => {
      return (
        <JobCard data={job} />
      );
    });
  };

  return (
    <React.Fragment>
      <Container maxWidth="lg">
        <Box sx={{ bgcolor: 'white' }} >
          {displayJobs()}
        </Box>
      </Container>
    </React.Fragment>
  );
}

export default App;
