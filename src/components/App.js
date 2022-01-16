import * as React from 'react';

// material-ui
import { Container, Typography, Box } from '@mui/material';

// project imports
import Copyright from './ui/Copyright';

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
