import React from 'react';
import { Box, Typography } from '@mui/material';
import styles from '../GamesTables/GamesTables.module.scss';
import { ContentType } from '../../constants/ContentType';

interface TournamentRow {
  id: number;
  title: string;
  description: string;
}

interface Props {
  type: ContentType;
}

export default function TournamentsTable({ type }: Props) {
  const rows: TournamentRow[] =
    type === ContentType.CS2
      ? [
          {
            id: 1,
            title: 'Upcoming Cs2 tournaments',
            description: 'Here will be the list of upcoming Cs2 tournaments...',
          },
          {
            id: 2,
            title: 'Past Cs2 tournaments',
            description: 'Here will be the list of past Cs2 tournaments...',
          },
        ]
      : [
          {
            id: 1,
            title: 'Upcoming Valorant tournaments',
            description: 'Here will be the list of upcoming Valorant tournaments...',
          },
          {
            id: 2,
            title: 'Past Valorant tournaments',
            description: 'Here will be the list of past Valorant tournaments...',
          },
        ];

  return (
    <Box className={styles.tournamentsRootBox}>
      {rows.map((row) => (
        <Box key={row.id} sx={{ mb: 2 }}>
          <Typography variant="h6">{row.title}</Typography>
          <Typography>{row.description}</Typography>
        </Box>
      ))}
    </Box>
  );
}
