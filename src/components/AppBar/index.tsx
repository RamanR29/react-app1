import * as React from 'react';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Button from '@mui/material/Button';
import { useLocation, useNavigate } from 'react-router-dom';
import { LinkItem } from '../../types';
import styles from './styles.module.scss';
import cs2img from '../../assets/cs2img.webp';
import valorant from '../../assets/valorant.jpg';
import logo from '../../assets/logo.png';

type AppBarProps = React.PropsWithChildren<{
  links?: LinkItem[];
}>;

const AppBar: React.FC<AppBarProps> = ({ children, links }) => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleNavigate = (link: string) => {
    void navigate(link);
  };

  links = [
    {
      link: '/',
      label: 'Home',
      name: 'Home',
    },
    {
      link: '/CS2',
      label: 'CS2',
      name: <img src={cs2img} alt="cs2" style={{ height: '32px', width: '32px' }} />,
    },
    {
      link: '/VALORANT',
      label: 'VALORANT',
      name: <img src={valorant} alt="valorant" style={{ height: '32px', width: '32px' }} />,
    },
  ];

  return (
    <Box className={styles.boxRoot}>
      <CssBaseline />
      <header className={styles.header}>
        <Box className={styles.toolbarLogo}>
          <img src={logo} alt="logo" style={{ width: 40, height: 40 }} />
        </Box>
        <Box className={styles.navButtonBox}>
          {links.map((link) => {
            const isActive = location.pathname === link.link;

            return (
              <Button
                key={link.link}
                onClick={() => handleNavigate(link.link)}
                className={`${styles.navButton} ${isActive ? styles.active : ''}`}
              >
                {link.name}
              </Button>
            );
          })}
        </Box>
      </header>
      <Box component="main" className={styles.main}>
        {children}
      </Box>
    </Box>
  );
};

export default AppBar;
