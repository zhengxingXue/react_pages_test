import * as React from 'react';

// material-ui
import CssBaseline from '@mui/material/CssBaseline';
import { Box } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';

// project imports
import theme from './components/Theme';
import Header from './components/navigation/Header';
import Copyright from './components/Copyright';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header />
      <Box
        sx={{
          minHeight: '100vh',
          backgroundImage: `url(${process.env.PUBLIC_URL + '/assets/bg.jpg'})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
        }}
      />
      <Copyright />
    </ThemeProvider>
  );
}

export default App;
