import { useEffect, useState } from 'react';

import { Header } from './components/Header';
import { TaskItem } from './components/TaskItem';
import { TaskForm } from './components/TaskForm';

import styles from './App.module.css';

import clipboardIcon from './assets/Clipboard.svg';
import { TaskHeader } from './components/TaskHeader';

export interface Task {
  id: string;
  content: string;
  completed: boolean;
}

const LOCAL_STORAGE_KEY = 'tasks';

export function App() {
  const [tasks, setTasks] = useState<Task[]>(() => {
    const localStorageTasks = localStorage.getItem(LOCAL_STORAGE_KEY);

    return localStorageTasks ? JSON.parse(localStorageTasks) : [];
  });

  function createTask(content: string) {
    const newTask = {
      id: crypto.randomUUID(),
      content,
      completed: false
    }

    setTasks((currentTasks) => [newTask, ...currentTasks]);
  }

  function deleteTask(id: string) {
    const updatedTasks = tasks.filter(task => task.id !== id);
    setTasks(updatedTasks);
  }

  function toggleTask(id: string) {
    setTasks(prevTasks => prevTasks.map(task => {
      return task.id === id ? { ...task, completed: !task.completed } : task
    }))
  }

  useEffect(() => localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(tasks)), [tasks]);

  return (
    <>
      <Header />
      <main className={styles.main}>

        <div className={styles.container}>
          <TaskForm onTaskCreation={createTask} />

          <div className={styles.taskContainer}>
            
            <TaskHeader tasks={tasks} />

            {tasks.length ? (
              <ul className={styles.taskList}>
                {tasks.map((task) => <TaskItem key={task.id} task={task} onTaskDelete={deleteTask} onTaskComplete={toggleTask} />)}
              </ul>
            ) : (
              <div className={styles.emptyList}>
                <img src={clipboardIcon} alt="" />
                <p>Você ainda não tem tarefas cadastradas</p>
                <span>Crie tarefas e organize seus itens a fazer</span>
              </div>
            )}

          </div>
        </div>
      </main>
    </>
  );
}

export default App
