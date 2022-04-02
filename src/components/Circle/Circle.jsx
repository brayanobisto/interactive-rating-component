import styles from './Circle.module.css';

function Circle({ children, checked = false }) {
  return <div className={checked ? styles.checked : styles.circle}>{children}</div>;
}

export default Circle;
