import { useState, useEffect } from "react";
import { nanoid } from "nanoid";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import { NotesList } from "../components/NotesList.js";
import { Search } from "../components/Search.js";

export default function Home() {
  const [searchText, setSearchText] = useState("");
  const [darkMode, setDarkMode] = useState(true);

  const [notes, setNotes] = useState([
    {
      id: nanoid(),
      text: "This is my first note!",
      date: "15/12/2022",
    },
    {
      id: nanoid(),
      text: "This is my second note!",
      date: "21/12/2022",
    },
  ]);

  useEffect(() => {
    const savedNotes = JSON.parse(localStorage.getItem("notes-app-data"));

    if (savedNotes) {
      setNotes(savedNotes);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("notes-app-data", JSON.stringify(notes));
  }, [notes]);

  const addNote = (text) => {
    const date = new Date();
    const newNote = {
      id: nanoid(),
      text: text,
      date: date.toLocaleDateString(),
    };
    const newNotes = [...notes, newNote];
    setNotes(newNotes);
  };

  const deleteNote = (id) => {
    const newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes);
  };

  return (
    <div className={darkMode && styles.darkMode}>
      <Head>
        <title>Notes</title>
        <meta name="description" content="Note taking app" />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css"
          integrity="sha512-MV7K8+y+gLIBoVD59lQIYicR65iaqukzvf/nwasF0nqhPay5w/9lJmVM2hMDcnK1OnMGCdVK+iQrJ7lzPJQd1w=="
          crossorigin="anonymous"
          referrerpolicy="no-referrer"
        />
      </Head>

      <main className={styles.container}>
        <div className={styles.header}>
          <h1>NOTES</h1>
          <label class="switch">
            <input type="checkbox" onClick={() => { setDarkMode(!darkMode) }} checked={!darkMode} />
            <span class="slider round"></span>
          </label>
        </div>
        <Search handleSearchNote={setSearchText} />
        <NotesList
          notes={notes.filter((note) =>
            note.text.toLowerCase().includes(searchText)
          )}
          handleAddNote={addNote}
          handleDeleteNote={deleteNote}

        />

      </main>
    </div>
  );
}
