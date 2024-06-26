import React from 'react';

function Note ({ note, updateNote, deleteNote }) {
  const handleInputChange = (event) => {
    updateNote(note.id, event.target.textContent);
  };

  return (
    <div className="note">
      <p 
        contentEditable 
        className="input-box" 
        onInput={handleInputChange}
      >
        {note.text}
      </p>
      <img 
        className="red" 
        src="https://imgs.search.brave.com/A8yvL5i5o8kRW8qeseBGyG_BH8MlyiHOzOw-McOEP0c/rs:fit:500:0:0/g:ce/aHR0cHM6Ly93d3cu/cG5nYWxsLmNvbS93/cC1jb250ZW50L3Vw/bG9hZHMvMTMvUmVk/LUNpcmNsZS5wbmc" 
        alt="delete-icon"
        onClick={() => deleteNote(note.id)}
      />
    </div>
  );
}

export default Note;
