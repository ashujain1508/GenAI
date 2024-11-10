import { AppBar, Toolbar, Container, Button, Box, IconButton, Drawer, List, ListItem, ListItemText } from '@mui/material';
import { Menu as MenuIcon } from '@mui/icons-material';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import barclaysLogo from '../../assets/barclays-logo.svg';
import eaglr_RGB from '../../assets/Eagle_RGB_Cyan_Large.svg';



const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const navigate = useNavigate();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
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
                alt="Barclays Logo"
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

            {/* Mobile Menu Icon */}
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{
                mr: 2,
                display: { md: 'none' },
                color: 'text.primary'
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
