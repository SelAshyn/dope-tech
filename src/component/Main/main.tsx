'use client';
import styles from './main.module.css';

const Main = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.content}>
        <h1 className={styles.title}>THE PRODUCT OF THE FUTURE</h1>
        <p className={styles.description}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor modi iure laudantium necessitatibus ab, voluptates vitae ullam.
          Officia ipsam iusto beatae nesciunt, consequatur deserunt minima maiores earum obcaecati. Optio, nam!
        </p>
        <br />
        <div className={styles.buttons}>
          <button className={styles.primary}>BUY NOW</button>
          <button className={styles.secondary}>LEARN MORE</button>
        </div>
      </div>
      <div className={styles.imageContainer}>
        <img
          src="https://raw.githubusercontent.com/SelAshyn/dope-tech/refs/heads/main/src/component/Main/watch.png"
          alt="Smartwatch"
          width={500}
          height={500}
          className={styles.image}
        />
        <div className={styles.imageOverlay}>
          <h1>Hello</h1>
          <p>This is an overlay text</p>
        </div>
      </div>
    </section>
  );
};

export default Main;
