import * as React from 'react';
import { Container, Typography } from '@mui/material';
import { Box } from '@mui/material';
import Copyright from './components/Copyright';

function App() {
  return (
    <Container maxWidth='sm'>
      <Box sx={{ my: 4 }}>
        <Typography variant='h4' component='h1' align='center' gutterBottom>
          Create React App example
        </Typography>
        <Copyright />
      </Box>
    </Container>
  );
}

export default App;
