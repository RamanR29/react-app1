import * as React from 'react';
import { AppBar as Header } from '@mui/material';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useLocation, useNavigate } from 'react-router-dom';
import LinkItem from '../../types';
import { styles } from './styles';

export default function AppBar({
  children,
  links,
}: React.PropsWithChildren<{ links: LinkItem[] }>) {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <Box sx={styles.boxRoot}>
      <CssBaseline />
      <Header component="nav" sx={styles.header}>
        <Toolbar>
          <IconButton color="default" aria-label="open drawer" edge="start" sx={styles.IconButton}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={styles.toolbarLogo}>
            <img src="logo.png" alt="logo" style={{ width: 40, height: 40 }} />
          </Typography>
          <Box sx={styles.navButtonBox}>
            {links.map((link) => {
              return (
                <Button
                  key={link.link}
                  onClick={() => void navigate(link.link)}
                  sx={styles.Button(location.pathname === link.link)}
                >
                  {link.name}
                </Button>
              );
            })}
          </Box>
        </Toolbar>
      </Header>
      <Box component="main" sx={styles.main}>
        {children}
      </Box>
    </Box>
  );
}
