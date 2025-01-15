import React from "react";
function Note(props) {
  return /*#__PURE__*/React.createElement("div", {
    id: "notes"
  }, /*#__PURE__*/React.createElement("h1", {
    id: "title"
  }, props.title), /*#__PURE__*/React.createElement("p", {
    id: "cont"
  }, props.content));
}
export default Note;