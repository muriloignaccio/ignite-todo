import styles from './Modal.module.css';

interface ModalProps {
    isOpen: boolean;
    onCancelDelete: () => void;
    onConfirmDelete: () => void;
}

export function Modal({ isOpen, onCancelDelete, onConfirmDelete }: ModalProps) {
    return (
        <div className={`${styles.background} ${isOpen && styles.show}`}>
            <div className={styles.modal}>
                <div className={styles.container}>
                    <h2>Excluir comentário</h2>
                    <p>Você tem certeza que gostaria de excluir este comentário?</p>
                    <div className={styles.modalActions}>
                        <button className={styles.cancelButton} onClick={onCancelDelete}>Cancelar</button>
                        <button className={styles.confirmButton} onClick={onConfirmDelete}>Sim, excluir</button>
                    </div>
                </div>
            </div>
        </div>
    );
}