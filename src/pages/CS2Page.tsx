import React from 'react';
import Box from '@mui/material/Box';
import styles from './pages.module.scss';
import Cs2Tabs from '../components/Tabs/Cs2Tabs';

const Cs2 = () => {
  return (
    <Box className={styles.page}>
      <Cs2Tabs></Cs2Tabs>
    </Box>
  );
};

export default Cs2;
