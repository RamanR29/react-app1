import React from 'react';
import DrawerAppBar from '../../scenes/AppBar';
import Box from '@mui/material/Box';

const CS2 = () => {
  return (
    <Box sx={{ backgroundColor: '#1A1A1D', minHeight: '100vh', color: '#ffffffff' }}>
      <DrawerAppBar />
      <p>Hello, that is CS2 page</p>
    </Box>
  );
};

export default CS2;
