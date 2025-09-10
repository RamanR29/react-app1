import './App.scss';
import Title from './components/Title';
import { Counter } from './components/Counter/Counter';
import { Buttons } from './components/Counter/Buttons';
import { useState } from 'react';
import { CounterAction } from './components/types/common';

function App() {
  const [count, setCount] = useState(0);

  function handleCount(action: CounterAction) {
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
      <Counter
        count={count}
        changeCount={function (): void {
          throw new Error('Function not implemented.');
        }}
      />
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
