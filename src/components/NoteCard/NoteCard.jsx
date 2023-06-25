// export default function NoteCard({ note }) {
//     console.log('this is note in NoteCard', note)
//     return(
//         <div>
//             {note.text}
//         </div>
//     )

// }

import React from 'react';
import './NoteCard.css';

export default function NoteCard({ note }) {
  return (
    <div className="note-card">
      <p>{note.text}</p>
    </div>
  );
}
