import { Link } from '@mui/material';
import { Typography } from '@mui/material';

function Copyright() {
  return (
    <Typography variant='body2' color='text.secondary' align='center'>
      {'Copyright © '}
      <Link
        color='inherit'
        href='https://www.linkedin.com/in/zhengxing-xue/'
        target='_blank'
      >
        Zhengxing Xue
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

export default Copyright;
