import React from "react";
import "./styles/Hero.css";

export default function Hero() {
  const [isVisible, setVisible] = React.useState(false);
  const domRef = React.useRef();
  React.useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => setVisible(entry.isIntersecting));
    });
    observer.observe(domRef.current);
  }, []);

  return (
    <header>
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
      <h4 className={`signature fade-in-hero ${isVisible ? "is-visible" : ""}`}>
        A personal website and portofolio by Lassi Köykkä
      </h4>
      <div className="titleAndSubtitle" ref={domRef}>
        <h1 className={`title fade-in-hero ${isVisible ? "is-visible" : ""}`}>
          Lassi Köykkä{" "}
        </h1>
        <h2
          className={`subtitle fade-in-hero ${isVisible ? "is-visible" : ""}`}
        >
          Programming, tech, and videogames. <br />
          It all belongs here.
        </h2>
      </div>
    </header>
  );
}
