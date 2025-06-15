'use client';

import styles from './into.module.css';

const into = () => {
  return (
    <section className={styles.hero}>
      <h1 className={styles.title}>
        INTRODUCING <span className={styles.sing}>DOPE</span><span className={styles.tronic}> TECH</span>
      </h1>
      <p className={styles.subtitle}>Buy the latest electronics.</p>
      <p className={styles.subtitle}>The best electronics for tech lovers.</p>
      <button className={styles.button}>SHOP NOW</button>
    </section>
  );
};

export default into;
