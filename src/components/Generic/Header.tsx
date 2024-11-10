import { AppBar, Toolbar, Container, Box, IconButton, Typography } from '@mui/material';
import { Menu as MenuIcon } from '@mui/icons-material';
import CircleNotificationsRoundedIcon from '@mui/icons-material/CircleNotificationsRounded';
import Person2RoundedIcon from '@mui/icons-material/Person2Rounded';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import barclaysLogo from '../../assets/barclays-logo.svg';
import eaglr_RGB from '../../assets/Eagle_RGB_Cyan_Large.svg';

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    console.log('Logging out...');
  };

  return (
    <>
      <AppBar
        position="fixed"
        sx={{
          backgroundColor: 'white',
          boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
        }}
      >
        <Container maxWidth="lg">
          <Toolbar sx={{ justifyContent: 'space-between', px: { xs: 0 } }}>
            {/* Logo */}
            <Box
              onClick={() => navigate('/')}
              sx={{
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center'
              }}
            >
              <img
                src={eaglr_RGB}
                alt="Eagle Logo"
                style={{
                  height: '25px',
                  marginRight: '10px'
                }}
              />
              <img
                src={barclaysLogo}
                alt="Barclays Logo"
                style={{
                  height: '25px',
                  marginRight: '10px'
                }}
              />
            </Box>

            {/* Navigation Icons */}
            <Box sx={{ 
              display: { xs: 'none', md: 'flex' }, 
              gap: 3, 
              alignItems: 'center',
              color: '#0B2F5E'
            }}>
              <Box sx={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}>
                <CircleNotificationsRoundedIcon />
                <Typography sx={{ ml: 1, color: '#0B2F5E' }}>Notification</Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}>
                <Person2RoundedIcon />
                <Typography sx={{ ml: 1, color: '#0B2F5E' }}>Profile</Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}>
                <SearchRoundedIcon />
                <Typography sx={{ ml: 1, color: '#0B2F5E' }}>Search</Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }} onClick={handleLogout}>
                <LogoutRoundedIcon />
                <Typography sx={{ ml: 1, color: '#0B2F5E' }}>Logout</Typography>
              </Box>
            </Box>

            {/* Mobile Menu Icon */}
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={() => setMobileOpen(!mobileOpen)}
              sx={{
                display: { md: 'none' },
                color: '#0B2F5E'
              }}
            >
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </Container>
      </AppBar>

      {/* Toolbar spacer */}
      <Toolbar />
    </>
  );
};

export default Header;
