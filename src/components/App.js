import * as React from 'react';

// material-ui
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';

// project imports
import theme from './ui/Theme';
import Header from './ui/Header';
// import Copyright from './ui/Copyright';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header />
      {/* <Copyright /> */}
    </ThemeProvider>
  );
}

export default App;
