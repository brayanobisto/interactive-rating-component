import styles from './AttributionFooter.module.css';

function AttributionFooter() {
  return (
    <div class={styles.attribution}>
      Challenge by{' '}
      <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
        Frontend Mentor
      </a>
      . Coded by{' '}
      <a href="https://github.com/brayanobisto" target="_blank">
        Brayan Obispo Torres
      </a>
      .
    </div>
  );
}

export default AttributionFooter;
