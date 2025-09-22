import React from 'react';
import Box from '@mui/material/Box';
import styles from './pages.module.scss';
import GameTabs from '../components/Tabs/GameTabs';
import { ContentType } from '../constants/ContentType';

const Valorant = () => {
  return (
    <Box className={styles.page}>
      <GameTabs type={ContentType.VALORANT}></GameTabs>
    </Box>
  );
};

export default Valorant;
