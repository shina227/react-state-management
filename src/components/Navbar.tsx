import { useTheme } from '../context/ThemeContext';
import { LIGHT_THEME, DARK_THEME } from '../constants/theme';
import styles from './Navbar.module.css';

export const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  const isLight = theme === LIGHT_THEME;

  return (
    <nav className={styles.navbar}>
      <span className={styles.brand}>
        React<span>App</span>
      </span>
      <button
        type="button"
        className={styles.toggle}
        onClick={toggleTheme}
        aria-label={`Switch to ${isLight ? DARK_THEME : LIGHT_THEME} mode`}
        aria-pressed={!isLight}
      >
        <span className={styles.thumb}>
          {isLight ? (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <circle cx="12" cy="12" r="4" />
              <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
            </svg>
          ) : (
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
            </svg>
          )}
        </span>
      </button>
    </nav>
  );
};