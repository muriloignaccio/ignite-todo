import { Trash } from "@phosphor-icons/react";

import { Checkbox } from "./Checkbox";
import { Task } from "../App";

import styles from './TaskItem.module.css';
import { Modal } from "./Modal";
import { useState } from "react";

interface TaskItemProps {
    task: Task,
    onTaskDelete: (id: string) => void;
    onTaskComplete: (id: string) => void;
}

export function TaskItem({ task: { id, content, completed }, onTaskDelete, onTaskComplete }:TaskItemProps) {
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
    function handleCheckboxChange() {
        onTaskComplete(id);
    }

    function handleTaskDelete() {
        onTaskDelete(id);
    }

    return (
        <li className={styles.taskItem}>
            <Checkbox checked={completed} onCheckboxChange={handleCheckboxChange} />
            <span className={completed ? styles.taskChecked : ''}>{content}</span>
            <button onClick={() => setIsDeleteModalOpen(true)}>
                <Trash size={20} />
            </button>

            <Modal 
                isOpen={isDeleteModalOpen} 
                onCancelDelete={() => setIsDeleteModalOpen(false)} 
                onConfirmDelete={handleTaskDelete} 
            />
        </li>
    );
}