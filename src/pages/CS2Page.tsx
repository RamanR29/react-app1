import React from 'react';
import Box from '@mui/material/Box';
import styles from './pages.module.scss';
import GameTabs from '../components/Tabs/GameTabs';
import { ContentType } from '../constants/ContentType';

const Cs2 = () => {
  return (
    <Box className={styles.page}>
      <GameTabs type={ContentType.CS2}></GameTabs>
    </Box>
  );
};

export default Cs2;
