import React from 'react';
import { Box, Typography } from '@mui/material';
import { ContentType } from '../../constants/ContentType';
import TeamsWithPlayers from '../../hooks/Players';

interface Props {
  type: ContentType;
}

interface TeamRow {
  id: number;
  content: React.ReactNode;
}

export default function PlayersList({ type }: Props) {
  const rows: TeamRow[] =
    type === ContentType.CS2
      ? [{ id: 1, content: <TeamsWithPlayers game={'csgo'} /> }]
      : [
          {
            id: 1,
            content: <TeamsWithPlayers game={'valorant'} />,
          },
        ];

  return (
    <Box>
      {rows.map((row) => (
        <Box key={row.id}>
          <Typography variant="h6">{row.content}</Typography>
        </Box>
      ))}
    </Box>
  );
}
