import React from "react";
import "../public/Footer.css"
import Chat from "./Chat";

function Footer() {
    const currentYear = new Date().getFullYear();
    return (<div>
        <div className="footer_container">
        <h2 className="footer_logo">G\G FITNESS</h2>
        <p >{currentYear}. All Rights Reserved.</p>
        </div>
        </div>);
}

export default Footer;