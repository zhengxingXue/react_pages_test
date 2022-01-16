import React from 'react';

// material-ui
import { AppBar, Toolbar, Typography } from '@mui/material';

const Header = () => {
  return (
    <React.Fragment>
      <AppBar position='static'>
        <Toolbar disableGutters></Toolbar>
      </AppBar>
    </React.Fragment>
  );
};

export default Header;
