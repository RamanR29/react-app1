import React, { JSX, useEffect, useState } from 'react';
import {
  Box,
  Typography,
  Card,
  CardContent,
  CardHeader,
  CircularProgress,
  Alert,
  Stack,
} from '@mui/material';
import { UpcomingMatchesProps } from '../constants/Game';
import { Tournament } from '../types/TournamentsType';
import styles from '../hooks/Styles.module.scss';

const UpcomingTournaments: React.FC<UpcomingMatchesProps> = ({ game }): JSX.Element => {
  const [tournaments, setTournaments] = useState<Tournament[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const API_TOKEN = process.env.REACT_APP_PANDASCORE_TOKEN!;
  const BASE_URL = 'https://api.pandascore.co';

  useEffect(() => {
    const fetchTournaments = async () => {
      try {
        const response = await fetch(
          `${BASE_URL}/${game}/tournaments/upcoming?sort=begin_at&page=1&per_page=20`,
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

        const data: Tournament[] = await response.json();
        setTournaments(data);
      } catch (err) {
        setError((err as Error).message);
      } finally {
        setLoading(false);
      }
    };

    fetchTournaments();
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

  if (tournaments.length === 0) {
    return (
      <Typography variant="body1" sx={{ mt: 2 }}>
        There is no upcoming tournamens
      </Typography>
    );
  }

  return (
    <Stack spacing={2} mt={2} display={'flex'}>
      {tournaments.map((tournament) => (
        <Card key={tournament.id} variant="outlined" className={styles.tournamentsCard}>
          <CardHeader
            avatar={
              tournament.league.image_url ? (
                <img
                  src={tournament.league.image_url}
                  alt={tournament.league.name}
                  style={{ width: 40, height: 40, borderRadius: '8px' }}
                />
              ) : undefined
            }
            title={tournament.name}
            subheader={
              tournament.begin_at
                ? `Starts at ${new Date(tournament.begin_at).toLocaleDateString()}`
                : 'Date to be confirmed'
            }
          />
          <CardContent>
            <Typography variant="body2" color="#adadadff">
              League: {tournament.league.name}
            </Typography>
            {tournament.series && (
              <Typography variant="body2" color="#adadadff">
                Series: {tournament.series.full_name}
              </Typography>
            )}
            <Typography variant="caption" color="inherit" className={styles.status}>
              Status: upcoming tournament
            </Typography>
          </CardContent>
        </Card>
      ))}
    </Stack>
  );
};

export default UpcomingTournaments;
