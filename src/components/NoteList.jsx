// import NoteItem from "./NoteItem";

// export default function NoteList({notes, editNote, onEdit, onDelete, onCheck}){
//     return(
//          <ul className="note-list" >
//             {notes
//             .filter(note => !editNote || note._id !== editNote.id)
//             .map((note) => {
//             return (
//                 <NoteItem 
//                 key={note._id}
//                 note={note}
//                 onEdit={onEdit}
//                 onDelete={onDelete}
//                 onCheck={onCheck}
//                 />
//         );
//         })}
//             </ul>
//     );
// }


// import React from 'react';
// import { FaCheckCircle, FaRegCircle, FaTrash, FaEdit } from 'react-icons/fa';

// const NoteList = ({ notes, editNote, onEdit, onDelete, onCheck }) => {
//   return (
//     <ul className="note-list">
//       {notes.map((note) => (
//         <li key={note.id} className={`note-item ${note.check ? 'checked' : ''}`}>
//           <span>{note.content}</span>
//           <div className="actions">
//             <button onClick={() => onCheck(note.id)} className="check-btn">
//               {note.check ? (
//                 <FaCheckCircle color="green" size={20} />
//               ) : (
//                 <FaRegCircle color="gray" size={20} />
//               )}
//             </button>
//             <button onClick={() => onEdit(note)} className="edit-btn">
//               <FaEdit color="#007bff" size={18} />
//             </button>
//             <button onClick={() => onDelete(note.id)} className="delete-btn">
//               <FaTrash color="red" size={18} />
//             </button>
//           </div>
//         </li>
//       ))}
//     </ul>
//   );
// };

// export default NoteList;
import React from 'react';
import { FaCheckCircle, FaRegCircle, FaTrash, FaEdit } from 'react-icons/fa';

const NoteList = ({ notes, onEdit, onDelete, onCheck }) => {
  return (
    <ul className="note-list">
      {notes.map((note) => (
        <li key={note.id} className={`note-item ${note.check ? 'checked' : ''}`}>
          <span>{note.content}</span>
          <div className="actions">
            <button onClick={() => onCheck(note.id)} className="check-btn">
              {note.check ? (
                <FaCheckCircle color="green" size={20} />
              ) : (
                <FaRegCircle color="gray" size={20} />
              )}
            </button>
            <button onClick={() => onEdit(note)} className="edit-btn">
              <FaEdit color="#007bff" size={18} />
            </button>
            <button onClick={() => onDelete(note.id)} className="delete-btn">
              <FaTrash color="red" size={18} />
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default NoteList;

