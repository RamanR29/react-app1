import styles from './Counter.module.scss';
interface CounterProps {
  count: number;
  changeCount: () => void;
}
export function Counter({ count }: CounterProps) {
  return <h2 className={styles.count}>Count: {count}</h2>;
}
