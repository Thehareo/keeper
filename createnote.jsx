import React, { useState } from "react";

function CreateNote({ onAdd }) { 
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  function handleTitleChange(e) {
    setTitle(e.target.value);
  }

  function handleContentChange(e) {
    setContent(e.target.value);
  }

  function handleClick() {
    if (title && content) {
      const newNote = { title, content };
      onAdd(newNote); 
      setTitle(""); 
      setContent(""); 
    }
  }

  return (
    <div id="noter">
      <input
        id="title2"
        placeholder="Title"
        maxLength={20}
        value={title}
        onChange={handleTitleChange}
      />
      <textarea
        id="cont2"
        placeholder="Add a note..."
        maxLength={100}
        value={content}
        onChange={handleContentChange}
      />
      <button id="delete" onClick={handleClick}>Add</button>
    </div>
  );
}

export default CreateNote;
