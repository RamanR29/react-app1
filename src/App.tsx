import React from 'react';
import './App.scss';
import Title from './components/Title';

function App() {
  return (
    <div className="App">
      <Title title="Raman Rahinia" />
      <div className="info">
        <p>I like to play video games like</p> <a href={process.env.REACT_APP_CS_LINK}>CS2</a> or{' '}
        <a href={process.env.REACT_APP_VALORANT_LINK}> VALORANT</a>
      </div>
    </div>
  );
}

export default App;
