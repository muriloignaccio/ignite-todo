import { InputHTMLAttributes } from 'react';
import styles from './Checkbox.module.css';

interface CheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
    checked: boolean;
    onCheckboxChange: () => void;
}

export function Checkbox({ checked, onCheckboxChange, ...props }: CheckboxProps) {
    return (
        <input 
            className={styles.checkbox} 
            checked={checked}
            onChange={onCheckboxChange}
            type="checkbox" 
            {...props}
        />
    );
}