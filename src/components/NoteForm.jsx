import  {FaPlus} from 'react-icons/fa';
export default function NoteForm ({input, setInput, handleSubmit, editNote, cancelEdit}){
    return(
    <>
        <form className="note-form" onSubmit={handleSubmit}>
            <input
            type="text"
            placeholder="أدخل ملاحظة..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            />
            <button type="submit" title={editNote ? 'تعديل' : 'إضافة'}>
            <FaPlus />
            </button>
        </form>
        {editNote && (
        <button
          type="button"
          className="cancel-btn"
          onClick={cancelEdit}
        >
          إلغاء التعديل
        </button>
      )}
    </>
    )
}
