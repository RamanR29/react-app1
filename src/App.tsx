import './App.scss';
import React from 'react';
import AppBar from './components/AppBar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Homepage';
import CS2 from './pages/CS2/CS2Page';
import VALORANT from './pages/VALORANT/ValorantPage';
import { ROUTES } from './constants/Routes';

function App() {
  return (
    <BrowserRouter>
      <AppBar
        links={[
          {
            name: 'Home',
            link: '/',
            label: '',
          },
          {
            name: (
              <img src="Counter-Strike_2_29.webp" alt="CS2" style={{ width: 32, height: 32 }} />
            ),
            link: '/CS2',
            label: '',
          },
          {
            name: (
              <img src="1900x1900-000000-81-0-0.jpg" alt="CS2" style={{ width: 32, height: 32 }} />
            ),
            link: '/VALORANT',
            label: '',
          },
        ]}
      >
        <Routes>
          <Route path={ROUTES.HOME} element={<Home />} />
          <Route path={ROUTES.CS2} element={<CS2 />} />
          <Route path={ROUTES.VALORANT} element={<VALORANT />} />
        </Routes>
      </AppBar>
    </BrowserRouter>
  );
}

export default App;
