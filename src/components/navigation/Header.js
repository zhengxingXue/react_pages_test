import * as React from 'react';

// material-ui
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  Container,
  Button,
  MenuItem,
  useMediaQuery,
  useTheme,
  Tabs,
  Tab,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import MenuIcon from '@mui/icons-material/Menu';
import GitHubIcon from '@mui/icons-material/GitHub';

// project imports
import ScrollEffect from './ScrollEffect';

const logo = 'Zhengxing Xue';
const pages = ['Projects', 'Technologies', 'About'];

const StyledTabs = styled((props) => (
  <Tabs {...props} TabIndicatorProps={{ style: { display: 'none' } }} />
))({
  marginRight: 'auto',
});

const StyledTab = styled((props) => <Tab disableRipple {...props} />)(() => ({
  textTransform: 'none',
  fontSize: '1rem',
  color: 'rgba(0, 0, 0, 0.6)',
  minWidth: 10,
  marginLeft: '2rem',
  '&.Mui-selected': {
    color: '#000',
  },
}));

const StyledAppBar = styled(AppBar)({
  backgroundColor: 'white',
});

const ResponsiveAppBar = () => {
  const [tabValue, setTabValue] = React.useState(0);
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const theme = useTheme();
  const smallerThanMedium = useMediaQuery(theme.breakpoints.down('md'));

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const mediumUpperLayout = (
    <React.Fragment>
      <Typography
        variant='h6'
        noWrap
        component='div'
        sx={{ mr: 5, display: 'flex' }}
      >
        {logo}
      </Typography>

      <StyledTabs value={tabValue} onChange={handleTabChange}>
        {pages.map((page) => (
          <StyledTab label={page} />
        ))}
      </StyledTabs>
    </React.Fragment>
  );

  const mediumLowerLayout = (
    <React.Fragment>
      <Box sx={{ flexGrow: 1, display: 'flex' }}>
        <IconButton size='large' onClick={handleOpenNavMenu} color='inherit'>
          <MenuIcon />
        </IconButton>

        <Menu
          id='menu-appbar'
          anchorEl={anchorElNav}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
          }}
          keepMounted
          transformOrigin={{
            vertical: 'top',
            horizontal: 'left',
          }}
          open={Boolean(anchorElNav)}
          onClose={handleCloseNavMenu}
          sx={{
            display: 'block',
          }}
        >
          {pages.map((page) => (
            <MenuItem key={page} onClick={handleCloseNavMenu}>
              <Typography textAlign='center'>{page}</Typography>
            </MenuItem>
          ))}
        </Menu>
      </Box>

      <Typography
        variant='h6'
        noWrap
        component='div'
        sx={{ flexGrow: 1, display: 'flex' }}
      >
        {logo}
      </Typography>
    </React.Fragment>
  );

  return (
    <React.Fragment>
      <ScrollEffect>
        <StyledAppBar position='fixed'>
          <Container maxWidth='lg'>
            <Toolbar disableGutters>
              {smallerThanMedium ? mediumLowerLayout : mediumUpperLayout}
              {/* github link icon */}
              <IconButton
                size='large'
                color='inherit'
                href='https://github.com/zhengxingXue/react_pages_test'
              >
                <GitHubIcon />
              </IconButton>
            </Toolbar>
          </Container>
        </StyledAppBar>
      </ScrollEffect>
    </React.Fragment>
  );
};
export default ResponsiveAppBar;
