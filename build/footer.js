import React from "react";
const date = new Date();
const year = date.getFullYear();
function Footer() {
  return /*#__PURE__*/React.createElement("div", {
    id: "right"
  }, /*#__PURE__*/React.createElement("h1", {
    id: "copy"
  }, "copyright @", year));
}
export default Footer;