import styles from "../styles/Note.module.css";

export const Note = ({ id, text, date, handleDeleteNote }) => {
    return (
        <div className={styles.note}>
            <span>{text}</span>
            <div className={styles.noteFooter}>
                <small>{date}</small>
                <i
                    className="fa fa-trash delete-icon"
                    aria-hidden="true"
                    onClick={() => handleDeleteNote(id)}
                />
            </div>
        </div>
    );
};