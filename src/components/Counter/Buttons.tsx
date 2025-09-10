import { CounterAction } from '../types/common';
import styles from './Buttons.module.scss';
interface ButtonsProps {
  count: number;
  changeCount: (action: CounterAction) => void;
}
export function Buttons({ changeCount, count }: ButtonsProps) {
  return (
    <>
      <button className={styles.action} onClick={() => changeCount('increase')}>
        Increase
      </button>
      <button className={styles.action} onClick={() => changeCount('decrease')}>
        Decrease
      </button>
      <button className={styles.action} disabled={count == 0} onClick={() => changeCount('reset')}>
        Reset
      </button>
    </>
  );
}
