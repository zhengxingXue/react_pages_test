import { Link, Typography, Grid } from '@mui/material';

function Copyright() {
  return (
    <Grid
      container
      direction='column'
      justifyContent='space-evenly'
      alignItems='center'
      spacing={0}
      sx={{ minHeight: '100vh' }}
    >
      <Grid container justifyContent='space-evenly' alignItems='center'>
        <Grid item>
          <Typography variant='h1' color='text.parimary'>
            Hello
          </Typography>
        </Grid>
        {/* <Grid item>
          <Typography variant='h1' color='text.parimary'>
            World
          </Typography>
        </Grid> */}
      </Grid>

      <Grid item>
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
