import { Link } from 'react-router-dom';
import '../../index.css'
import { useState, useEffect } from "react";
import * as notesAPI from '../../utilities/notes-api';
import NoteCard from "../../components/NoteCard/NoteCard"


export default function MyNotesPage({ user }) {
  const [notes, setNotes] = useState([]);
  console.log('this is notes in MyNotesPage', notes)

  useEffect(() => {
    async function getNotes() {
      try {
        const notes = await notesAPI.getNotes();
        setNotes(notes);
      } catch (error) {
        console.error('Error retrieving notes:', error);
      }
    }
    getNotes();
  }, []);

  let noteItems = null;

  if (notes.length === 0) {
    noteItems = <p>No Notes Yet! 😔</p>;
  } else {
    noteItems = notes.map((note) => (
      <NoteCard key={note._id} note={note} />
    ));
  }

  return (
    <>
      <h1>{user.name} Notes</h1>
      <Link to="/notes/new" className="button">
        Add New Note
      </Link>
      <br />
      <br />
      <>
      {noteItems}
      </>
    </>
  );


}



