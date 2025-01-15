import React from "react";

const date = new Date();
const year = date.getFullYear();

function Footer() {
    return <div id="right"><h1 id="copy">copyright @{year}</h1></div>;
}
export default Footer;