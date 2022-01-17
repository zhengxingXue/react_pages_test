import React from 'react';

import { Typography } from '@mui/material';

const Logo = (props) => {
  const logoText = 'Zhengxing Xue';

  return (
    <Typography
      variant='h6'
      noWrap
      component='div'
      sx={{ display: 'flex', ...props }}
    >
      {logoText}
    </Typography>
  );
};

export default Logo;
