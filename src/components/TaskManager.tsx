import { useReducer, useState } from 'react';
import { taskReducer } from '../reducers/taskReducer';
import styles from './TaskManager.module.css';

export const TaskManager = () => {
  const [tasks, dispatch] = useReducer(taskReducer, []);
  const [task, setTask] = useState('');

  const addTask = () => {
    const trimmed = task.trim();
    if (!trimmed) return;
    dispatch({ type: 'add', payload: trimmed });
    setTask('');
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Task Manager</h2>

      <div className={styles.inputRow}>
        <input
          className={styles.input}
          value={task}
          onChange={(e) => setTask(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && addTask()}
          placeholder="Add a task..."
        />
        <button type="button" className={styles.addButton} onClick={addTask} disabled={!task.trim()}>
          Add
        </button>
      </div>

      {tasks.length === 0 ? (
        <p className={styles.empty}>No tasks yet - add your first one above.</p>
      ) : (
        <ul className={styles.taskList}>
          {tasks.map((t) => (
            <li key={t.id} className={styles.taskItem}>
              <span>{t.text}</span>
              <button
                type="button"
                className={styles.removeButton}
                onClick={() => dispatch({ type: 'remove', payload: t.id })}
                aria-label={`Remove ${t.text}`}
              >
                ✕
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};