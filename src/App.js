import * as React from 'react';

// material-ui
import CssBaseline from '@mui/material/CssBaseline';
import { Box } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';

// project imports
import theme from './components/Theme';
import Header from './components/navigation/Header';
// import Copyright from './ui/Copyright';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header />
      <Box sx={{ bgcolor: '#cfe8fc', height: '200vh' }} />
      {/* <Copyright /> */}
    </ThemeProvider>
  );
}

export default App;
