import type { ReactNode } from 'react';
import styles from './App.module.css';
import { ThemeProvider, useTheme } from './context/ThemeContext';
import { Navbar } from './components/Navbar';
import { TaskManager } from './components/TaskManager';

function AppShell({ children }: { children: ReactNode }) {
  const { theme } = useTheme();
  return (
    <div className={styles.app} data-theme={theme}>
      {children}
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <AppShell>
        <Navbar />
        <TaskManager />
      </AppShell>
    </ThemeProvider>
  );
}