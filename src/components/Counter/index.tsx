import { useState } from 'react';
import { CounterAction } from '../types/common';
import styles from './Counter.module.scss';

function Counter() {
  const [count, setCount] = useState(0);

  function handleCount(action: CounterAction) {
    switch (action) {
      case 'increase':
        setCount(count + 1);
        break;
      case 'decrease':
        setCount(count - 1);
        break;
      default:
        // eslint-disable-next-line @typescript-eslint/no-unused-expressions
        'reset';
        setCount(0);
    }
  }
  return (
    <div className={styles.container}>
      <h2 className={styles.count}>Count: {count}</h2>
      <div>
        <button className={styles.action} onClick={() => handleCount('increase')}>
          Increase
        </button>
        <button className={styles.action} onClick={() => handleCount('decrease')}>
          Decrease
        </button>
        <button
          className={styles.action}
          disabled={count === 0}
          onClick={() => handleCount('reset')}
        >
          Reset
        </button>
      </div>
    </div>
  );
}
export default Counter;
