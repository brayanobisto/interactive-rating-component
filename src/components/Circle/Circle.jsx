import styles from './Circle.module.css';

function Circle({ children }) {
  return <div className={styles.circle}>{children}</div>;
}

export default Circle;
