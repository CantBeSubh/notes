import { Note } from './Note.js';
import { AddNote } from './AddNote.js';
import styles from "../styles/NoteList.module.css";


export const NotesList = ({ notes, handleAddNote, handleDeleteNote }) => {
    return (
        <div className={styles.notesList}>
            {notes.map((note) => (
                <Note
                    id={note.id}
                    key={note.id}
                    text={note.text}
                    date={note.date}
                    handleDeleteNote={handleDeleteNote}
                />
            ))}
            <AddNote handleAddNote={handleAddNote} />

        </div>
    )
}
