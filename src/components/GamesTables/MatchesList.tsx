import React from 'react';
import { Box, Typography } from '@mui/material';
import styles from '../GamesTables/GamesTables.module.scss';
import { ContentType } from '../../constants/ContentType';

interface Props {
  type: ContentType;
}

interface TeamRow {
  id: number;
  title: string;
  description: string;
}

export default function PlayersList({ type }: Props) {
  const rows: TeamRow[] =
    type === ContentType.CS2
      ? [
          {
            id: 1,
            title: 'Cs2 upcoming and ongoing matches',
            description: 'Here will be the list of Cs2 upcoming and ongoing matches...',
          },
        ]
      : [
          {
            id: 1,
            title: 'Valorant upcoming and ongoing matches',
            description: 'Here will be the list of Valorant upcoming and ongoing matches...',
          },
        ];

  return (
    <Box className={styles.matchesRootBox}>
      {rows.map((row) => (
        <Box key={row.id}>
          <Typography variant="h6">{row.title}</Typography>
          <Typography>{row.description}</Typography>
        </Box>
      ))}
    </Box>
  );
}
