import React from 'react';
import { Box, Typography } from '@mui/material';
import styles from '../GamesTables/GamesTables.module.scss';
import { ContentType } from '../../constants/ContentType';
import UpcomingMatches from '../../hooks/Matches';

interface Props {
  type: ContentType;
}

interface TeamRow {
  id: number;
  content: React.ReactNode;
}

export default function MatchesList({ type }: Props) {
  const rows: TeamRow[] =
    type === ContentType.CS2
      ? [
          {
            id: 1,
            content: <UpcomingMatches game={'csgo'} />,
          },
        ]
      : [
          {
            id: 2,
            content: <UpcomingMatches game={'valorant'} />,
          },
        ];

  return (
    <Box className={styles.matchesRootBox}>
      {rows.map((row) => (
        <Box key={row.id}>{row.content}</Box>
      ))}
    </Box>
  );
}
