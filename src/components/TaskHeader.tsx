import { Task } from '../App';
import styles from './TaskHeader.module.css';

interface TaskHeaderProps {
    tasks: Task[];
}

export function TaskHeader({ tasks }: TaskHeaderProps) {
    const completedTasks = tasks.filter(task => task.completed);
    const taskCount = tasks.length;
    return (
        <header className={styles.taskHeader}>
            <div className={styles.taskCountContainer}>
                <span className={styles.createdTasks}>Tarefas criadas</span>
                <span className={styles.taskCount}>{taskCount}</span>
            </div>

            <div className={styles.taskCountContainer}>
                <span className={styles.completedTasks}>Concluídas</span>
                <span className={styles.taskCount}>{completedTasks.length === 0 ? '0' : `${completedTasks.length} de ${taskCount}`}</span>
            </div>
        </header>
    );
}