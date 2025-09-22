import React from 'react';
import { Box, Typography } from '@mui/material';
import styles from '../ValorantTables/ValorantTables.module.scss';

export const ValoMatchesList: React.FC = () => {
  return (
    <Box className={styles.MatchesRootBox}>
      <Typography variant="h6">Upcoming matches</Typography>
      <Typography>Here will be the list of upcoming matches...</Typography>
    </Box>
  );
};
