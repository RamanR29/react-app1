import React from 'react';
import './App.scss';
import Title from './components/Title';
import Counter from './Counter.jsx';
import Buttons from './Buttons.jsx';
import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);
  function handleCount(action: any) {
    switch (action) {
      case 'increase':
        setCount(count + 1);
        break;
      case 'decrease':
        setCount(count - 1);
        break;
      case 'reset':
        setCount(0);
    }
  }
  return (
    <div className="App">
      <Counter count={count} />
      <Buttons changeCount={handleCount} count={count} />
      <Title title="Raman Rahinia" />
      <div className="info">
        <p>I like to play video games like</p> <a href={process.env.REACT_APP_CS_LINK}>CS2</a> or{' '}
        <a href={process.env.REACT_APP_VALORANT_LINK}> VALORANT</a>
      </div>
    </div>
  );
}

export default App;
