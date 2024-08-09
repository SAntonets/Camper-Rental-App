import styles from './HomePage.module.css';

const HomePage = () => {
  return (
    <div className={styles.homepage}>
      <div className={styles.overlay}>
        <div className={styles.content}>
          <h1 className={styles.title}>Explore the Best Campers</h1>
          <p className={styles.description}>Find and rent the perfect camper for your next adventure.</p>
          <div className={styles.buttons}>
            <a href="/catalog" className={styles.btnPrimary}>View Catalog</a>
            <a href="/favorites" className={styles.btnSecondary}>Favorites</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
