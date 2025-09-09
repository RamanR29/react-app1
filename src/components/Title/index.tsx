import styles from './Title.module.scss';
interface TitleProps {
  title: string;
}
const Title = ({ title }: TitleProps) => {
  return <div className={styles.title}>{title}</div>;
};
export default Title;
