import React from 'react';
import {
  Box,
  Avatar,
  Typography,
  Button,
  IconButton,
  useTheme as useMuiTheme,
} from '@mui/material';
import {
  LinkedIn,
  GitHub,
  Email,
  Twitter,
  Instagram,
  Work,
} from '@mui/icons-material';

// Sidebar component with profile information and social links
const Sidebar = () => {
  const muiTheme = useMuiTheme();

  // Social media links array
  const socialLinks = [
    { icon: LinkedIn, href: '#', color: '#0077b5' },
    { icon: GitHub, href: '#', color: '#333' },
    { icon: Email, href: '#', color: '#ea4335' },
    // { icon: Twitter, href: '#', color: '#1da1f2' },
    { icon: Instagram, href: '#', color: '#e4405f' },
    // { icon: Work, href: '#', color: '#1769ff' },
  ];

  return (
    <Box
      sx={{
        width: { xs: '100%', md: 320 },
        flexShrink: 0,
        display: { xs: 'block', md: 'block' },
        mb: { xs: 3, md: 0 },
      }}
    >
      {/* Profile card container */}
      <Box
        sx={{
          background: muiTheme.palette.background.paper,
          borderRadius: 4,
          p: 4,
          boxShadow: muiTheme.palette.mode === 'dark'
            ? '0 8px 32px rgba(0, 0, 0, 0.4)'
            : '0 8px 32px rgba(0, 0, 0, 0.1)',
          border: `1px solid ${muiTheme.palette.divider}`,
          backdropFilter: 'blur(10px)',
          height: 'fit-content',
          position: 'sticky',
          top: 24,
        }}
      >
        {/* Profile header with name */}
        <Typography
          variant="h4"
          sx={{
            fontWeight: 700,
            color: muiTheme.palette.text.primary,
            mb: 3,
            textAlign: 'center',
          }}
        >
          Hans W. Augustin
        </Typography>

        {/* Profile picture */}
        <Box sx={{ display: 'flex', justifyContent: 'center', mb: 3 }}>
          <Avatar
            sx={{
              width: 120,
              height: 120,
              border: `4px solid ${muiTheme.palette.divider}`,
              boxShadow: '0 8px 25px rgba(0, 0, 0, 0.2)',
            }}
            alt="Alex Walker"
            src="/avatar-placeholder.svg"
          />
        </Box>

        {/* Specialization */}
        <Typography
          variant="body1"
          sx={{
            color: muiTheme.palette.text.secondary,
            textAlign: 'center',
            mb: 2,
            fontWeight: 500,
          }}
        >
          Specialization: IT support, Data analyst, UI/UX designer and frontend developer.
        </Typography>

        {/* Location */}
        <Typography
          variant="body2"
          sx={{
            color: muiTheme.palette.text.secondary,
            textAlign: 'center',
            mb: 4,
            opacity: 0.8,
          }}
        >
          Based in: Port-au-Prince, Haiti
        </Typography>

        {/* Social media icons */}
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            gap: 1.5,
            mb: 4,
          }}
        >
          {socialLinks.map((social, index) => {
            const IconComponent = social.icon;
            return (
              <IconButton
                key={index}
                href={social.href}
                sx={{
                  width: 40,
                  height: 40,
                  backgroundColor: muiTheme.palette.background.default,
                  border: `1px solid ${muiTheme.palette.divider}`,
                  color: social.color,
                  '&:hover': {
                    backgroundColor: social.color,
                    color: 'white',
                    transform: 'translateY(-2px)',
                    boxShadow: `0 4px 15px ${social.color}40`,
                  },
                  transition: 'all 0.3s ease',
                }}
              >
                <IconComponent fontSize="small" />
              </IconButton>
            );
          })}
        </Box>

        {/* Call to action button */}
        <Button
          variant="contained"
          fullWidth
          sx={{
            background: 'linear-gradient(135deg, #e91e63 0%, #9c27b0 100%)',
            color: 'white',
            py: 2,
            fontSize: '1.1rem',
            fontWeight: 600,
            '&:hover': {
              background: 'linear-gradient(135deg, #c2185b 0%, #7b1fa2 100%)',
              transform: 'translateY(-2px)',
              boxShadow: '0 8px 25px rgba(233, 30, 99, 0.4)',
            },
            transition: 'all 0.3s ease',
          }}
        >
          Let's Work Together!
        </Button>
      </Box>
    </Box>
  );
};

export default Sidebar;
