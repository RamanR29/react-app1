import React from 'react';
import { Box, Typography } from '@mui/material';
import { ContentType } from '../../constants/ContentType';

interface Props {
  type: ContentType;
}

interface TeamRow {
  id: number;
  title: string;
  description: string;
}

export default function TeamsTable({ type }: Props) {
  const rows: TeamRow[] =
    type === ContentType.CS2
      ? [{ id: 1, title: 'Cs2 teams', description: 'Here will be the list of Cs2 teams...' }]
      : [
          {
            id: 1,
            title: 'Valorant teams',
            description: 'Here will be the list of Valorant teams...',
          },
        ];

  return (
    <Box>
      {rows.map((row) => (
        <Box key={row.id}>
          <Typography variant="h6">{row.title}</Typography>
          <Typography>{row.description}</Typography>
        </Box>
      ))}
    </Box>
  );
}
