import styles from "./Title.module.scss"
interface TitleProps {
    title: string;
}
const Title = ({ title }: TitleProps) => {
    const a = 15;
    
    return (
        <div className={styles.title}>{title}</div>
    );
}
export default Title