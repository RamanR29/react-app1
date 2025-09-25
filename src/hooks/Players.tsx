import React, { JSX, useEffect, useState } from 'react';
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Avatar,
  Typography,
  CircularProgress,
  Alert,
  Stack,
  Pagination,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { UpcomingMatchesProps } from '../constants/Game';
import { Team } from '../types/PlayersTypes';
import styles from '../hooks/Styles.module.scss';

const TeamsWithPlayers: React.FC<UpcomingMatchesProps> = ({ game }): JSX.Element => {
  const [teams, setTeams] = useState<Team[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const perPage = 20;

  const API_TOKEN = process.env.REACT_APP_PANDASCORE_TOKEN;
  const BASE_URL = 'https://api.pandascore.co';

  const fetchTeams = async (pageNumber: number) => {
    setLoading(true);
    try {
      const response = await fetch(
        `${BASE_URL}/${game}/teams?page[number]=${pageNumber}&per_page=${perPage}`,
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

      const data: Team[] = await response.json();

      const totalItems = Number(response.headers.get('X-Total')) || data.length;
      setTotalPages(Math.ceil(totalItems / perPage));

      const withPlayers = data.filter((team) => team.players && team.players.length > 0);

      withPlayers.sort((a, b) => a.name.localeCompare(b.name));

      setTeams(withPlayers);
    } catch (err) {
      setError((err as Error).message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTeams(page);
  }, [page, game]);

  if (loading)
    return (
      <Stack alignItems="center" mt={4}>
        <CircularProgress />
      </Stack>
    );

  if (error) return <Alert severity="error">{error}</Alert>;

  return (
    <Stack spacing={2}>
      {teams.map((team) => (
        <Accordion key={team.id} className={styles.accordion}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Stack direction="row" alignItems="center" spacing={2}>
              <Avatar src={team.image_url ?? undefined} alt={team.name} />
              <Typography variant="h6">
                {team.name} ({team.players.length})
              </Typography>
            </Stack>
          </AccordionSummary>
          <AccordionDetails>
            <Stack spacing={1}>
              {team.players.map((player) => (
                <Stack key={player.id} direction="row" spacing={2} alignItems="center">
                  <Avatar src={player.image_url ?? undefined} alt={player.name} />
                  <Typography>
                    {player.name} {player.nationality ? `(${player.nationality})` : ''}
                  </Typography>
                </Stack>
              ))}
            </Stack>
          </AccordionDetails>
        </Accordion>
      ))}

      {totalPages > 1 && (
        <Stack alignItems="center" mt={2}>
          <Pagination
            count={totalPages}
            page={page}
            onChange={(_, value) => setPage(value)}
            sx={{
              '& .MuiPaginationItem-root': {
                color: 'white',
              },
              '& .MuiPaginationItem-root.Mui-selected': {
                backgroundColor: '#4708d9',
                color: 'white',
              },
              '& .MuiPaginationItem-root.Mui-selected:hover': {
                backgroundColor: '#4708d9',
              },
            }}
          />
        </Stack>
      )}
    </Stack>
  );
};

export default TeamsWithPlayers;
