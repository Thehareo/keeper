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
    setNotes(prevNotes => [...prevNotes, newNote]);
  }
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Heading, null), /*#__PURE__*/React.createElement(CreateNote, {
    onAdd: addNote
  }), " ", /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexWrap: "wrap",
      gap: "10px",
      flexDirection: "row"
    }
  }, notes.map((bruh, index) => /*#__PURE__*/React.createElement(Note, {
    key: index,
    title: bruh.title,
    content: bruh.content
  }))), /*#__PURE__*/React.createElement(Footer, null));
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(/*#__PURE__*/React.createElement(App, null));