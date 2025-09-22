import React from 'react';
import Box from '@mui/material/Box';
import styles from './pages.module.scss';
import ValorantTabs from '../components/Tabs/ValorantTabs';

const Valorant = () => {
  return (
    <Box className={styles.page}>
      <ValorantTabs />
    </Box>
  );
};

export default Valorant;
