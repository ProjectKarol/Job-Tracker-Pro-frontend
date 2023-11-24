import React, { useEffect } from 'react';
import { CssBaseline, Container, Box } from '@mui/material';
import ResponsiveAppBar from './components/AppBar.component';
import axios from 'axios';
import JobCard from './components/JobCard.component';


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

  const displayJobs = () => {
    return data.map((job: any) => {
      return (
        <div key={job.id}>
          <h1>{job.company}</h1>
          <h2>{job.title}</h2>
          <h3>{job.location}</h3>
          <h4>{job.description}</h4>
          <JobCard />
        </div>
      );
    });
  };

  return (
    <React.Fragment>
      <ResponsiveAppBar />
      <CssBaseline />
      <Container maxWidth="lg">
        <Box sx={{ bgcolor: 'white' }} >
          {displayJobs()}
        </Box>
      </Container>
    </React.Fragment>
  );
}

export default App;
