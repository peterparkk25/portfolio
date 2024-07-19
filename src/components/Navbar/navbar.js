import React from "react";
import "./navbar.css";
import logo from "../../assets/tempLogo.jpg";
// import contactImg from "../../assets/"
import { Link } from "react-scroll";

function Navbar() {
  return (
    <nav className="navbar">
      <img src={logo} alt="Logo" className="logo" />
      <div className="desktopMenu">
        <Link className="desktopMenuListItem">Home</Link>
        <Link className="desktopMenuListItem">About</Link>
        <Link className="desktopMenuListItem">Portfolio</Link>
        <Link className="desktopMenuListItem">Clients</Link>
      </div>
      <button className="desktopMenuBtn">
        <img src={logo} alt="" class Name="desktopMenuImg" />
        Contact Me
      </button>
    </nav>
  );
}

export default Navbar;
