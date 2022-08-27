import * as React from 'react';
import type { NextPage } from 'next';
import { Container, Box } from '@mui/material';

import Home from './../containers/Home';

const About: NextPage = () => {
  return (
    <Box
      sx={{
        bgcolor: 'background.paper',
        pt: 8,
        pb: 6,
      }}
    >
      <Container maxWidth="xl" sx={{ mt: 8 }}>
        <Home category='swiper'/>
      </Container>
    </Box>
  );
};

export default About;