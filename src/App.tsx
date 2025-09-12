import './App.scss';
import React from 'react';
import AppBar from './components/AppBar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Homepage';
import CS2 from './pages/CS2/CS2Page';
import VALORANT from './pages/VALORANT/ValorantPage';

// create ROUTES enum

function App() {
  return (
    <BrowserRouter>
      <AppBar>
        <Routes>
          <Route index element={<Home />}></Route>
          <Route path={'/CS2'} element={<CS2 />}></Route>
          <Route path={'/VALORANT'} element={<VALORANT />}></Route>
        </Routes>
      </AppBar>
    </BrowserRouter>
  );
}

export default App;
