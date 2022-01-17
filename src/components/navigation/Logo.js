import React from 'react';

import { Typography } from '@mui/material';

const Logo = (props) => {
  const logoText = 'X';

  return (
    <Typography
      variant='h3'
      noWrap
      component='div'
      sx={{ display: 'flex', fontFamily: 'Zen Tokyo Zoo', ...props }}
    >
      {logoText}
    </Typography>
  );
};

export default Logo;
