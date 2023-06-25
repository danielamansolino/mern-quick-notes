import { useState, useEffect } from "react";
import { createNewNote } from '../../utilities/notes-service';
import * as notesAPI from "../../utilities/notes-api";
import NoteCart from "../../components/NoteCard/NoteCard";
import "./NewNotes.css"

export default function NewNotesPage({ user }) {
  const [notes, setNotes] = useState([]);
  const [newNoteText, setNewNoteText] = useState({ text: '' });
  console.log('this is notes in NewNotes', notes)

  async function handleSubmit(event) {
    event.preventDefault();
    const newNote = {
      text: newNoteText.text,
      user: user._id,
    };
    const note = await createNewNote(newNote);
    setNotes([...notes, note]);
    console.log('these are all the notes', notes);
    console.log('this is the user in handleSubmit', user);
    setNewNoteText({ text: '' });
  
  }

  function handleChange(event) {
    setNewNoteText({
      ...newNoteText,
      [event.target.name]: event.target.value,
    });
    console.log('newNotetext in handleChange', newNoteText);
  }

  useEffect(function () {
    async function getNotes() {
      const notes = await notesAPI.getNotes();
      setNotes(notes);
    }
    getNotes();
  }, []);

  let noteItems

 
    noteItems = notes.map((note) => (
      <NoteCart key={note._id} note={note} />
    ));
  
  return (
    <div>
      <h1>New Notes</h1>
      <h3>What is in your mind?</h3>
      <form className="note-form" onSubmit={handleSubmit}>
        <textarea
          name="text"
          value={newNoteText.text}
          onChange={handleChange}
        />
        <button type="submit">Add Note</button>
      </form>
        <>
          {noteItems}
        </>
    </div>
  );
}


