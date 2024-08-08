import React from "react";
import "./navbar.css";
import logo from "./logo.svg";
// import contactImg from "../../assets/"

function Navbar() {
  return (
    <div className="navbar">
      <img src={logo} alt="Logo" className="logo" />
      <ul className="nav-menu">
        <li>Home</li>
        <li>About Me</li>
        <li>Portfolio</li>
        <li>Contact</li>
        <li>Services</li>
      </ul>
      <div className="nav-connect">Connect With Me!</div>
    </div>
  );
}

export default Navbar;
