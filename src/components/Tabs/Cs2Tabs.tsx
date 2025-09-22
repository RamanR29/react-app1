import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { TournamentsTable } from '../Cs2tables/TournamensTable';
import { MatchesList } from '../Cs2tables/MatchesList';
import { PlayersList } from '../Cs2tables/PlayersList';
import { TeamsTable } from '../Cs2tables/TeamsTable';
import styles from '../Tabs/Tabs.module.scss';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box className={styles.childrenBox}>{children}</Box>}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function Cs2Tabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box className={styles.rootBox}>
      <Tabs
        value={value}
        onChange={handleChange}
        aria-label="basic tabs example"
        variant="fullWidth"
        textColor="inherit"
        indicatorColor="secondary"
        className={styles.tabs}
      >
        <Tab label="Matches" {...a11yProps(0)} />
        <Tab label="Tournamens" {...a11yProps(1)} />
        <Tab label="Players" {...a11yProps(2)} />
        <Tab label="Teams" {...a11yProps(3)} />
      </Tabs>
      <CustomTabPanel value={value} index={0}>
        <MatchesList />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <TournamentsTable />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        <PlayersList />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={3}>
        <TeamsTable />
      </CustomTabPanel>
    </Box>
  );
}
