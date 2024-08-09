import { NavLink } from 'react-router-dom';
import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <h1><NavLink to="/" >
              Camper Rental
            </NavLink></h1>
      <nav>
        <ul className={styles.navList}>
          <li>
            <NavLink 
              to="/" 
              className={({ isActive }) => isActive ? styles.activeLink : ''}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/catalog" 
              className={({ isActive }) => isActive ? styles.activeLink : ''}
            >
              Catalog
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/favorites" 
              className={({ isActive }) => isActive ? styles.activeLink : ''}
            >
              Favorites
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
