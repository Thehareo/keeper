import React from "react";

function Note(props) {
    return (
        <div id="notes">
            <h1 id="title">{props.title}</h1>
            <p id="cont">{props.content}</p>
        </div>
    );
}

export default Note;