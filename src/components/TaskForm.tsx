import { PlusCircle } from '@phosphor-icons/react';

import styles from './TaskForm.module.css';
import { ChangeEvent, FormEvent, useState } from 'react';

interface TaskFormProps {
    onTaskCreation: (content: string) => void;
}

export function TaskForm({ onTaskCreation }: TaskFormProps) {
    const [task, setTask] = useState("");

    const isTaskEmpty = task.trim().length === 0;

    function handleTaskCreation(e: FormEvent) {
        e.preventDefault();
        onTaskCreation(task);
        setTask("");
    }

    function handleTaskChange(e: ChangeEvent<HTMLInputElement>) {
        setTask(e.target.value);
    }

    return (
        <form 
            className={styles.taskForm}
            onSubmit={handleTaskCreation}
        >
            <input
                type="text"
                value={task}
                onChange={handleTaskChange}
                placeholder='Adicione uma nova tarefa'
            />
            <button disabled={isTaskEmpty}>
                Criar
                <PlusCircle size={20} weight='regular' />
            </button>
        </form>
    );
}