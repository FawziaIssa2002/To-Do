  // "homepage": "https://github.com/FawziaIssa2002/To-Do.git",

import { useEffect, useState } from 'react';
import './App.css';
import ThemeButton from './components/ThemeButton';
import NoteForm from './components/NoteForm';
import NoteList from './components/NoteList';

function App() {
  const [editNote, setEditNote] = useState(null);
  const [notes, setNotes] = useState([
    { id: 1, content: 'موعد مشروع الزمن الحقيقي في الساعة 10:45', check: false },
    { id: 2, content: 'do not forget to buy a new laptop', check: false },
    { id: 3, content: 'back home at 21:00', check: false }
  ]);

  const [input, setInput] = useState('');
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    document.body.className = darkMode ? 'dark' : 'light';
  }, [darkMode]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && editNote) {
        setEditNote(null);
        setInput('');
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [editNote]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    if (editNote) {
      setNotes(notes.map(note =>
        note.id === editNote.id
          ? { ...note, content: input }
          : note
      ));
    } else {
      const newNote = {
        id: Date.now(),
        content: input,
        check: false
      };
      setNotes([...notes, newNote]);
    }
    setInput('');
    setEditNote(null);
  };

  const deleteNote = (id) => {
    setNotes(notes.filter(note => note.id !== id));
  };

  const checkNote = (id) => {
    setNotes(notes.map(note =>
      note.id === id
        ? { ...note, check: !note.check }
        : note
    ));
  };

  const edit = (note) => {
    setEditNote({ id: note.id, text: note.content });
    setInput(note.content);
  };

  return (
    <div className="App">
      <ThemeButton darkMode={darkMode} setDarkMode={setDarkMode} />
      <h1 className="hed">📝 قائمة الملاحظات</h1>
      {editNote && (
        <div className="editing-hint">🛠️ أنت الآن تقوم بتعديل ملاحظة</div>
      )}
      <NoteForm
        input={input}
        setInput={setInput}
        handleSubmit={handleSubmit}
        editNote={editNote}
        cancelEdit={() => { setEditNote(null); setInput(''); }}
      />
      <NoteList
        notes={notes}
        editNote={editNote}
        onEdit={edit}
        onDelete={deleteNote}
        onCheck={checkNote}
      />
    </div>
  );
}

export default App;
