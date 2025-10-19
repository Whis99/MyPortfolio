import React from 'react';
import {
  Box,
  Typography,
  Button,
  useTheme as useMuiTheme,
} from '@mui/material';
import {
  GridView,
  Download,
  KeyboardArrowDown,
} from '@mui/icons-material';

// Main content component with introduction and call-to-action buttons
const MainContent = () => {
  const muiTheme = useMuiTheme();

  return (
    <Box
      sx={{
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        position: 'relative',
        minHeight: '70vh',
      }}
    >
      {/* Greeting text */}
      <Typography
        variant="body2"
        sx={{
          color: muiTheme.palette.text.secondary,
          mb: 2,
          opacity: 0.8,
          fontWeight: 500,
          textTransform: 'uppercase',
          letterSpacing: '1px',
        }}
      >
        Let's meet!
      </Typography>

      {/* Main heading */}
      <Typography
        variant="h1"
        sx={{
          color: muiTheme.palette.text.primary,
          mb: 1,
          fontWeight: 700,
          lineHeight: 1.1,
        }}
      >
        I'm Hans Whisler Augustin.
      </Typography>

      {/* Subtitle */}
      <Typography
        variant="h5"
        sx={{
          color: muiTheme.palette.text.primary,
          mb: 4,
          fontWeight: 600,
          opacity: 0.9,
          lineHeight: 1.2,
        }}
      >
        Digital designer and Front-en developer
      </Typography>

      {/* Call to action buttons */}
      <Box sx={{ display: 'flex', gap: 3, mb: 6, flexWrap: 'wrap' }}>
        {/* My Works button */}
        <Button
          variant="outlined"
          startIcon={<GridView />}
          sx={{
            borderColor: muiTheme.palette.divider,
            color: muiTheme.palette.text.primary,
            backgroundColor: muiTheme.palette.background.paper,
            '&:hover': {
              borderColor: muiTheme.palette.primary.main,
              backgroundColor: muiTheme.palette.action.hover,
              transform: 'translateY(-2px)',
              boxShadow: '0 8px 25px rgba(0, 0, 0, 0.15)',
            },
            transition: 'all 0.3s ease',
            px: 4,
            py: 1.5,
            fontSize: '1.1rem',
            fontWeight: 600,
          }}
        >
          My Works
        </Button>

        {/* Download CV link */}
        <Button
          variant="text"
          startIcon={<Download />}
          sx={{
            color: muiTheme.palette.text.secondary,
            '&:hover': {
              color: muiTheme.palette.primary.main,
              backgroundColor: 'transparent',
              transform: 'translateY(-2px)',
            },
            transition: 'all 0.3s ease',
            px: 3,
            py: 1.5,
            fontSize: '1.1rem',
            fontWeight: 500,
            textDecoration: 'underline',
            textUnderlineOffset: '4px',
          }}
        >
          Download CV
        </Button>
      </Box>

      {/* Scroll indicator */}
      <Box
        sx={{
          position: 'absolute',
          bottom: 0,
          right: 0,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 2,
        }}
      >
        {/* Scroll text */}
        <Typography
          variant="caption"
          sx={{
            color: muiTheme.palette.text.secondary,
            opacity: 0.7,
            fontSize: '0.75rem',
            fontWeight: 500,
            textTransform: 'uppercase',
            letterSpacing: '1px',
            writingMode: 'vertical-rl',
            textOrientation: 'mixed',
          }}
        >
          Scroll for more
        </Typography>

        {/* Animated scroll arrow */}
        <Box
          sx={{
            width: 40,
            height: 40,
            borderRadius: '50%',
            border: `2px solid ${muiTheme.palette.divider}`,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            animation: 'bounce 2s infinite',
            '@keyframes bounce': {
              '0%, 20%, 50%, 80%, 100%': {
                transform: 'translateY(0)',
              },
              '40%': {
                transform: 'translateY(-10px)',
              },
              '60%': {
                transform: 'translateY(-5px)',
              },
            },
          }}
        >
          <KeyboardArrowDown
            sx={{
              color: muiTheme.palette.text.secondary,
              fontSize: '1.5rem',
            }}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default MainContent;
