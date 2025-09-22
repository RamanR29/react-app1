import React from 'react';
import { Box, Typography } from '@mui/material';
import styles from '../ValorantTables/ValorantTables.module.scss';

export const ValoTournamentsTable: React.FC = () => {
  return (
    <Box className={styles.TournamentsRootBox}>
      <Box>
        <Typography variant="h6">Upcoming tournaments</Typography>
        <Typography>Here will be the list of upcoming tournaments...</Typography>
      </Box>
      <Box>
        <Typography variant="h6">Pass tournaments</Typography>
        <Typography>Here will be the list of pass tournaments...</Typography>
      </Box>
    </Box>
  );
};
