import React, { useState } from './node_modules/react';
import ReactDOM from "react-dom/client";
import Heading from "./heading.jsx";
import Footer from "./footer.jsx";
import Note from "./note.jsx";
import CreateNote from "./createnote.jsx";

function App() {
  const [notes, setNotes] = useState([]); // Array to store notes

  // Function to add a new note
  function addNote(newNote) {
    setNotes((prevNotes) => [...prevNotes, newNote]);
  }

  return (
    <>
      <Heading />
      <CreateNote onAdd={addNote} /> {/* Pass `addNote` to CreateNote */}
      <div style={{ display: "flex", flexWrap: "wrap", gap: "10px", flexDirection: "row" }}>
        {notes.map((bruh, index) => (
          <Note key={index} title={bruh.title} content={bruh.content} />
        ))}
      </div>
      <Footer  />
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
