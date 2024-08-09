import { NavLink } from 'react-router-dom';
import styles from './HomePage.module.css';

const HomePage = () => {
  return (
    <div className={styles.homepage}>
      <div className={styles.overlay}>
        <div className={styles.content}>
          <h1 className={styles.title}>Explore the Best Campers</h1>
          <p className={styles.description}>Find and rent the perfect camper for your next adventure.</p>
          <div className={styles.buttons}>
            <NavLink to="/catalog" className={styles.btnPrimary}>View Catalog</NavLink>
            <NavLink to="/favorites" className={styles.btnSecondary}>Favorites</NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
