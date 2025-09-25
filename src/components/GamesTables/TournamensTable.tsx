import React from 'react';
import { Box, Typography } from '@mui/material';
import styles from '../GamesTables/GamesTables.module.scss';
import { ContentType } from '../../constants/ContentType';
import UpcomingTournaments from '../../hooks/Tournaments';

interface TournamentRow {
  id: number;
  content: React.ReactNode;
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
            content: <UpcomingTournaments game={'csgo'} />,
          },
        ]
      : [
          {
            id: 1,
            content: <UpcomingTournaments game={'valorant'} />,
          },
        ];

  return (
    <Box>
      {rows.map((row) => (
        <Box key={row.id} sx={{ mb: 2 }}>
          <Typography variant="h6">{row.content}</Typography>
        </Box>
      ))}
    </Box>
  );
}
