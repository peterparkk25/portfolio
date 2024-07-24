import React from "react";
import "./intro.css";
// import profilelogo from "../../assets/tempLogo.jpq";

function Intro() {
  return (
    <div className="intro">
      {/* <img src={profilelogo} alt="Logo" className="logo" /> */}
      <h1>
        <span>Hello! I'm Peter Park,</span> fullstack web and mobile app
        developer
      </h1>
      <p>
        I am an aspiring software enginner from NY with an electrical
        engineering background looking for entry level roles within software
        development!
      </p>
      <div className="intro-action">
        <div className="intro-connect">Connect with me</div>
        <div className="intro-resume">My resume</div>
      </div>
    </div>
  );
}

export default Intro;
