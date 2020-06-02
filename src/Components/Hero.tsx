import React from "react";

export default function Hero() {
  return (
    <header>
      <h4 className="signature">
        A personal website and portofolio by Lassi Köykkä
      </h4>
      <div className="titleAndSubtitle">
        <h1 className="title">Lassi Köykkä </h1>
        <h2 className="subtitle">
          Programming, tech, and videogames. <br />
          It all belongs here.
        </h2>
      </div>
      <nav>
        <a href="#" className="navlink">
          Home
        </a>
        <a href="#" className="navlink">
          About
        </a>
        <a href="#" className="navlink">
          Projects
        </a>
        <a href="#" className="navlink">
          Work
        </a>
        <a href="#" className="navlink">
          Contact
        </a>
      </nav>
    </header>
  );
}
