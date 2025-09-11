import './App.scss';
import React from 'react';
import DrawerAppBar from './scenes/AppBar';
import { RouterProvider } from 'react-router-dom';
import { router } from './routes';

function App() {
  return <RouterProvider router={router} />;
}

export default App;
