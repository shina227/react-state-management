import { useTheme } from '../context/ThemeContext';
import { LIGHT_THEME, DARK_THEME } from '../constants/theme';
import styles from './Navbar.module.css';

export const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  const nextTheme = theme === LIGHT_THEME ? DARK_THEME : LIGHT_THEME;

  return (
    <nav className={`${styles.navbar} ${theme === LIGHT_THEME ? styles.light : styles.dark}`}>
      <span className={styles.brand}>React App</span>
      <button type="button" className={styles.toggleButton} onClick={toggleTheme}>
        Switch to {nextTheme} Mode
      </button>
    </nav>
  );
};