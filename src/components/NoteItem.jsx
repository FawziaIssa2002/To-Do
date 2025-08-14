import { FaTrash, FaCheckCircle, FaEdit, FaPlus, FaRegCheckCircle } from 'react-icons/fa';

export default function NoteItem( {note, onEdit, onDelete, onCheck}){
    return(
        <>
            <li className="note-item" >
                <span className={note.check ? 'check-note' : ''}>
                    {note.text || note.content}
                </span>
                <div className="note-buttons">
                    <button
                    className="updabutten"
                    onClick={() =>onEdit(note)}
                    title="تعديل"
                    >
                    <FaEdit />
                    </button>
                    <button
                    className="deletbutten"
                    onClick={() => onDelete(note._id)}
                    title="حذف"
                    >
                        <FaTrash />
                    </button>
                    <button
                    className="checkbutten"
                    onClick={() => onCheck(note._id)}
                    title="تأشير كمكتملة"
                    >
                    {note.check ? <FaCheckCircle /> : <FaRegCheckCircle />}
                    </button>
                </div>
            </li>
        </>
    )
}