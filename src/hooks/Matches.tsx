import React, { JSX, useEffect, useState } from 'react';
import {
  Box,
  Typography,
  Card,
  CardContent,
  CardHeader,
  Avatar,
  CircularProgress,
  Alert,
  Stack,
} from '@mui/material';
import { Match } from '../types/MatchesType';
import { UpcomingMatchesProps } from '../constants/Game';
import styles from '../hooks/Styles.module.scss';

const UpcomingMatches: React.FC<UpcomingMatchesProps> = ({ game }): JSX.Element => {
  const [matches, setMatches] = useState<Match[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const API_TOKEN = process.env.REACT_APP_PANDASCORE_TOKEN!;
  const BASE_URL = 'https://api.pandascore.co';

  useEffect(() => {
    const fetchMatches = async () => {
      try {
        const response = await fetch(
          `${BASE_URL}/${game}/matches?filter[status]=not_started&page[size]=20&sort=begin_at`,
          {
            headers: {
              Authorization: `Bearer ${API_TOKEN}`,
            },
          },
        );

        if (!response.ok) {
          const errText = await response.text();
          throw new Error(`Error API: ${response.status} - ${response.statusText} - ${errText}`);
        }

        const data: Match[] = await response.json();
        setMatches(data);
      } catch (err) {
        setError((err as Error).message);
      } finally {
        setLoading(false);
      }
    };

    fetchMatches();
  }, [game]);

  if (loading) {
    return (
      <Box display="flex" justifyContent="center" mt={4}>
        <CircularProgress />
      </Box>
    );
  }

  if (error) {
    return (
      <Alert severity="error" sx={{ mt: 2 }}>
        {error}
      </Alert>
    );
  }

  if (matches.length === 0) {
    return (
      <Typography variant="body1" sx={{ mt: 2 }}>
        There is no upcoming matches
      </Typography>
    );
  }

  return (
    <Stack spacing={2} mt={2}>
      {matches.map((match) => (
        <Card key={match.id} variant="outlined" className={styles.card}>
          <CardHeader
            title={match.name}
            subheader={
              match.begin_at
                ? `Starts at ${new Date(match.begin_at).toLocaleString()}`
                : 'Date to be confirmed'
            }
          />
          <CardContent>
            <Stack
              direction="row"
              display={'flex'}
              justifyContent={'space-between'}
              alignItems="center"
            >
              {match.opponents.map(({ opponent }) => (
                <Stack key={opponent.id} direction="row" spacing={1} alignItems="center">
                  <Avatar src={opponent.image_url ?? undefined} alt={opponent.name} />
                  <Typography variant="body1">{opponent.name}</Typography>
                </Stack>
              ))}
            </Stack>
            <Typography variant="caption" color="inherit" className={styles.status}>
              Status: upcoming match
            </Typography>
          </CardContent>
        </Card>
      ))}
    </Stack>
  );
};

export default UpcomingMatches;
