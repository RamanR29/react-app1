import './App.scss';
import React from 'react';
import AppBar from './components/AppBar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Homepage';
import Cs2 from './pages/CS2Page';
import Valorant from './pages/ValorantPage';
import { ROUTES } from './constants/Routes';

function App() {
  return (
    <BrowserRouter>
      <AppBar>
        <Routes>
          <Route path={ROUTES.HOME} element={<Home />} />
          <Route path={ROUTES.CS2} element={<Cs2 />} />
          <Route path={ROUTES.VALORANT} element={<Valorant />} />
        </Routes>
      </AppBar>
    </BrowserRouter>
  );
}

export default App;
