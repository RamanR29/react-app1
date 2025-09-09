import { CounterAction } from './types/common';

interface CounterProps {
  count: number;
  changeCount: () => void;
}
export function Counter({ count }: CounterProps) {
  return <h2>Count: {count}</h2>;
}

interface ButtonsProps {
  count: number;
  changeCount: (action: CounterAction) => void;
}
export function Buttons({ changeCount, count }: ButtonsProps) {
  return (
    <>
      <button onClick={() => changeCount('increase')}>Increase</button>
      <button onClick={() => changeCount('decrease')}>Decrease</button>
      <button disabled={count == 0} onClick={() => changeCount('reset')}>
        Reset
      </button>
    </>
  );
}
