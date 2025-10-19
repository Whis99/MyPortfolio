import React from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  IconButton,
  useTheme as useMuiTheme,
} from '@mui/material';
import {
  LightMode,
  DarkMode,
  Message,
} from '@mui/icons-material';
import { useTheme } from '../contexts/ThemeContext';

// Header component with navigation and theme toggle
const Header = () => {
  const { mode, toggleTheme } = useTheme();
  const muiTheme = useMuiTheme();

  // Navigation items array
  const navItems = [
    { label: 'Home', href: '#home', active: true },
    { label: 'Portfolio', href: '#portfolio' },
    { label: 'About Me', href: '#about' },
    { label: 'Resume', href: '#resume' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <AppBar
      position="static"
      elevation={0}
      sx={{
        background: 'transparent',
        borderBottom: `1px solid ${muiTheme.palette.divider}`,
        backdropFilter: 'blur(10px)',
        backgroundColor: muiTheme.palette.mode === 'dark' 
          ? 'rgba(30, 30, 30, 0.8)' 
          : 'rgba(255, 255, 255, 0.8)',
      }}
    >
      <Toolbar sx={{ justifyContent: 'space-between', px: 3 }}>
        {/* Left side - Navigation links */}
        <Box sx={{ display: 'flex', gap: 2 }}>
          {navItems.map((item) => (
            <Button
              key={item.label}
              href={item.href}
              sx={{
                color: item.active 
                  ? muiTheme.palette.primary.main 
                  : muiTheme.palette.text.secondary,
                fontWeight: item.active ? 600 : 400,
                '&:hover': {
                  color: muiTheme.palette.primary.main,
                  backgroundColor: 'transparent',
                },
                textDecoration: item.active ? 'underline' : 'none',
                textUnderlineOffset: '4px',
              }}
            >
              {item.label}
            </Button>
          ))}
        </Box>

        {/* Right side - Theme toggle and CTA button */}
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          {/* Theme toggle button */}
          <IconButton
            onClick={toggleTheme}
            sx={{
              color: muiTheme.palette.text.secondary,
              '&:hover': {
                color: muiTheme.palette.primary.main,
                backgroundColor: muiTheme.palette.action.hover,
              },
            }}
          >
            {mode === 'dark' ? <LightMode /> : <DarkMode />}
          </IconButton>

          {/* Let's Talk button */}
          <Button
            variant="contained"
            startIcon={<Message />}
            sx={{
              background: 'linear-gradient(135deg, #3679f5ff 0%, #02389cff 100%)',
              color: 'white',
              '&:hover': {
                background: 'linear-gradient(135deg, #2955a5ff 0%, #022972ff 100%)',
                transform: 'translateY(-2px)',
                boxShadow: '0 8px 25px rgba(233, 30, 99, 0.3)',
              },
              transition: 'all 0.3s ease',
              fontWeight: 600,
              px: 3,
              py: 1.5,
            }}
          >
            Let's Talk
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
