import React from 'react';
import { ThemeProvider as MuiThemeProvider, createTheme } from '@mui/material/styles';
import { CssBaseline, Box } from '@mui/material';
import { ThemeProvider, useTheme } from './contexts/ThemeContext';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import MainContent from './components/MainContent';

// Main App component that wraps everything in theme providers
function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

// Separate component to use the theme context
function AppContent() {
  const { mode } = useTheme();
  
  // Create Material UI theme based on current mode
  const theme = createTheme({
    palette: {
      mode: mode,
      primary: {
        main: mode === 'dark' ? '#f8f9fa' : '#212529',
      },
      secondary: {
        main: '#e91e63',
      },
      background: {
        default: mode === 'dark' ? '#121212' : '#ffffff',
        paper: mode === 'dark' ? '#1e1e1e' : '#f8f9fa',
      },
      text: {
        primary: mode === 'dark' ? '#ffffff' : '#212529',
        secondary: mode === 'dark' ? '#b0b0b0' : '#6c757d',
      },
    },
    typography: {
      fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
      h1: {
        fontWeight: 700,
        fontSize: '3.5rem',
      },
      h2: {
        fontWeight: 600,
        fontSize: '2.5rem',
      },
      h3: {
        fontWeight: 600,
        fontSize: '2rem',
      },
      body1: {
        fontSize: '1.1rem',
        lineHeight: 1.6,
      },
    },
    shape: {
      borderRadius: 16,
    },
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            textTransform: 'none',
            borderRadius: 12,
            padding: '12px 24px',
            fontWeight: 600,
          },
        },
      },
    },
  });

  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <Box
        sx={{
          minHeight: '100vh',
          background: mode === 'dark' 
            ? 'linear-gradient(135deg, #121212 0%, #1a1a1a 100%)'
            : 'linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%)',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Purple glow effect in top right corner */}
        <Box
          sx={{
            position: 'absolute',
            top: -100,
            right: -100,
            width: 300,
            height: 300,
            background: 'radial-gradient(circle, rgba(147, 51, 234, 0.3) 0%, rgba(147, 51, 234, 0.1) 50%, transparent 100%)',
            borderRadius: '50%',
            zIndex: 0,
          }}
        />
        
        {/* Main layout container */}
        <Box
          sx={{
            position: 'relative',
            zIndex: 1,
            display: 'flex',
            flexDirection: 'column',
            minHeight: '100vh',
          }}
        >
          {/* Header with navigation */}
          <Header />
          
          {/* Main content area with sidebar and content */}
          <Box
            sx={{
              display: 'flex',
              flex: 1,
              gap: 3,
              p: 3,
              maxWidth: '1400px',
              mx: 'auto',
              width: '100%',
              flexDirection: { xs: 'column', md: 'row' },
            }}
          >
            {/* Left sidebar */}
            <Sidebar />
            
            {/* Main content */}
            <MainContent />
          </Box>
        </Box>
      </Box>
    </MuiThemeProvider>
  );
}

export default App;
