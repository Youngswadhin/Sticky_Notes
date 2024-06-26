import React, { useEffect, useState } from 'react';
import './App.css';
import { gsap } from 'gsap';
import noteIcon from './note.png';

function App() {
  const [notes, setNotes] = useState(() => {
    return localStorage.getItem('notes') ? JSON.parse(localStorage.getItem('notes')) : [];
  });

  useEffect(() => {
    const head = "Sticky Notes";
    const header = document.querySelector('.head');
    header.innerHTML = '';
    const value = head.split('');

    value.forEach((data) => {
      let spanElement = document.createElement('div');
      spanElement.textContent = data;
      spanElement.classList.add('spanel');
      header.appendChild(spanElement);
    });

    // gsap.from('.heading', {
    //   color: 'black',
    //   scale: 5,
    //   duration: 1,
    //   ease: 'expo.in',
    // });

    // const tl = gsap.timeline();
    // tl.from('.spanel', {
    //   y: 200,
    //   duration: 2,
    //   ease: 'bounce.in',
    //   stagger: 0.03,
    // });
    // tl.from('.logo', {
    //   rotation: 90,
    //   duration: 1,
    //   scale: 0.5,
    //   opacity: 0,
    // });
    // gsap.from('.button', {
    //   y: -100,
    //   opacity: 0,
    // });
  }, []);

  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(notes));
  }, [notes]);

  const createNote = () => {
    const timestamp = new Date().toLocaleString();
    setNotes([...notes, { content: '', timestamp }]);
  };

  const updateNote = (index, content) => {
    const updatedNotes = notes.map((note, i) => (i === index ? { ...note, content } : note));
    setNotes(updatedNotes);
  };

  const deleteNote = (index) => {
    const updatedNotes = notes.filter((_, i) => i !== index);
    setNotes(updatedNotes);
  };

  return (
    <div className="container">
      <nav>
        <img src={noteIcon} className="logo" height="40px" width="40px" alt="note-pic" />
        <h1 className="head" style={{ color: 'white' }}></h1>
        <button className="button" onClick={createNote}>Create Notes</button>
      </nav>
      <h1 className="heading">Notes</h1>
      <div className="notes-container">
        {notes.map((note, index) => (
          <div className="input-box" key={index}>
            <span className="note-number">{index + 1}</span>
            <div contentEditable={true} suppressContentEditableWarning={true} onBlur={(e) => updateNote(index, e.target.innerText)}>
              {note.content}
            </div>
            <small>{note.timestamp}</small>
            <img className="red" src="https://imgs.search.brave.com/A8yvL5i5o8kRW8qeseBGyG_BH8MlyiHOzOw-McOEP0c/rs:fit:500:0:0/g:ce/aHR0cHM6Ly93d3cu/cG5nYWxsLmNvbS93/cC1jb250ZW50L3Vw/bG9hZHMvMTMvUmVk/LUNpcmNsZS5wbmc" alt="" onClick={() => deleteNote(index)} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
