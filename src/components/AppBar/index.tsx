// import font in css dinemicly
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import * as React from 'react';
import { AppBar as Header } from '@mui/material';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';

// move to constants

const navLinks = [
  {
    name: 'Home',
    link: '/',
  },
  {
    name: <img src="Counter-Strike_2_29.webp" alt="CS2" style={{ width: 32, height: 32 }} />,
    link: '/CS2',
  },
  {
    name: <img src="1900x1900-000000-81-0-0.jpg" alt="CS2" style={{ width: 32, height: 32 }} />,
    link: '/VALORANT',
  },
];

export default function AppBar({ children }: React.PropsWithChildren) {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        display: 'flex',
        color: '#FFFFFF',
      }}
    >
      <CssBaseline />
      <Header
        component="nav"
        sx={{
          backgroundColor: '#4708d9ff',
          color: '#FFFFFF',
        }}
      >
        <Toolbar>
          <IconButton
            color="default"
            aria-label="open drawer"
            edge="start"
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            <img src="logo.png" alt="logo" style={{ width: 40, height: 40 }} />
          </Typography>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            {navLinks.map((link) => (
              <Button
                key={link.link}
                onClick={() => {
                  void navigate(link.link);
                }}
                sx={{
                  color: 'white',
                  height: '50px',

                  '&.active': {
                    backgroundColor: '#502ba5ff',
                    fontWeight: 'bold',
                  },
                }}
              >
                {link.name}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Header>
      <Box component="main" sx={{ width: '100%', paddingTop: '48px' }}>
        {children}
      </Box>
    </Box>
  );
}
