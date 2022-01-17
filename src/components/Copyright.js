import { Link, Typography, Grid } from '@mui/material';

function Copyright() {
  return (
    <Grid
      container
      direction='column'
      justifyContent='center'
      alignItems='center'
      spacing={2}
      sx={{ minHeight: '100vh' }}
    >
      <Grid item xs={12}>
        <Typography variant='body2' color='text.secondary'>
          {'Copyright © '}
          <Link
            color='inherit'
            href='https://www.linkedin.com/in/zhengxing-xue/'
            target='_blank'
          >
            Zhengxing Xue
          </Link>{' '}
          {new Date().getFullYear()}
        </Typography>
      </Grid>
    </Grid>
  );
}

export default Copyright;
