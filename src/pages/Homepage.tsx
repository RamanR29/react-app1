import React from 'react';
import Box from '@mui/material/Box';
import styles from './pages.module.scss';
import { Card, CardContent, CardMedia, Typography } from '@mui/material';
import { news } from '../constants/News.items';

const Home = () => {
  return (
    <Box className={styles.page}>
      <Box className={styles.rootBox}>
        <Box className={styles.welcomeSection}>
          <Typography variant="h3" gutterBottom>
            Welcome to our eSports portal!
          </Typography>
          <Typography variant="h6">
            Here you can follow all the important events in the world of CS2 and Valorant: the
            latest news, tournament announcements, team ratings and profiles, and match reviews. We
            have collected everything a true eSports fan needs to stay up to date with the latest
            events and not miss a single epic moment.
          </Typography>
        </Box>

        <Typography variant="h4" gutterBottom>
          News
        </Typography>
        <Box className={styles.news}>
          {news.map((item, index) => (
            <Card key={index} className={styles.card}>
              <CardMedia
                component="img"
                height="140"
                image={item.image}
                alt={item.title}
                style={{ height: '250px', width: '600px' }}
              />
              <CardContent>
                <Typography variant="h6">{item.title}</Typography>
                <Typography variant="body2" color="#adadadff">
                  {item.description}
                </Typography>
              </CardContent>
            </Card>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default Home;
