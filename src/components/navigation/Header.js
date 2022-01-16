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
} from '@mui/material';
import { styled } from '@mui/material/styles';
import MenuIcon from '@mui/icons-material/Menu';
import GitHubIcon from '@mui/icons-material/GitHub';

// project imports
import ScrollEffect from './ScrollEffect';

const logo = 'Zhengxing Xue';
const pages = ['Projects', 'Technologies', 'About'];

const StyledAppBar = styled(AppBar)({
  backgroundColor: 'white',
});

const ResponsiveAppBar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <React.Fragment>
      <ScrollEffect>
        <StyledAppBar position='fixed'>
          <Container maxWidth='lg'>
            <Toolbar disableGutters sx={{ color: 'black' }}>
              {/* xs layout, extra-small: 0px */}
              <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                <IconButton
                  size='large'
                  onClick={handleOpenNavMenu}
                  color='inherit'
                >
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
                    display: { xs: 'block', md: 'none' },
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
                sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
              >
                {logo}
              </Typography>

              {/* md layout, medium: 900px */}
              <Typography
                variant='h6'
                noWrap
                component='div'
                sx={{ mr: 5, display: { xs: 'none', md: 'flex' } }}
              >
                {logo}
              </Typography>

              <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                {pages.map((page) => (
                  <Button
                    key={page}
                    onClick={handleCloseNavMenu}
                    sx={{ my: 2, mr: 2, color: 'inherit', display: 'block' }}
                  >
                    {page}
                  </Button>
                ))}
              </Box>

              {/* Icons for external link, always on right */}
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
