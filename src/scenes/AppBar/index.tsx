import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { NavLink } from 'react-router-dom';

interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
}

const drawerWidth = 240;
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

export default function DrawerAppBar(props: Props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        <img src="logo.png" alt="logo" style={{ width: 40, height: 40 }} />
      </Typography>
      <Divider />
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box
      sx={{
        display: 'flex',
        color: '#FFFFFF',
      }}
    >
      <CssBaseline />
      <AppBar
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
            onClick={handleDrawerToggle}
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
                component={NavLink}
                to={link.link}
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
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
      <Box component="main" sx={{ p: 3 }}>
        <Toolbar />
      </Box>
    </Box>
  );
}
