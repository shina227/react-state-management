import { useReducer, useState } from 'react';
import { taskReducer } from '../reducers/taskReducer';
import { useTheme } from '../context/ThemeContext';
import { LIGHT_THEME } from '../constants/theme';
import styles from './TaskManager.module.css';

export const TaskManager = () => {
  const [tasks, dispatch] = useReducer(taskReducer, []);
  const [task, setTask] = useState('');
  const { theme } = useTheme();

  const addTask = () => {
    const trimmed = task.trim();
    if (!trimmed) return;
    dispatch({ type: 'add', payload: trimmed });
    setTask('');
  };

  return (
    <div className={`${styles.container} ${theme === LIGHT_THEME ? styles.light : styles.dark}`}>
      <h2>Task Manager</h2>

      <div className={styles.inputRow}>
        <input
          className={styles.input}
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="Add a task..."
        />
        <button type="button" onClick={addTask} disabled={!task.trim()}>
          Add
        </button>
      </div>

      <ul className={styles.taskList}>
        {tasks.map((t) => (
          <li key={t.id} className={styles.taskItem}>
            <span>{t.text}</span>
            <button type="button" onClick={() => dispatch({ type: 'remove', payload: t.id })}>
              ✕
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};