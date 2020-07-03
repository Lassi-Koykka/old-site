import React from "react";
import Emoji from "./Emoji";
import "./styles/Hero.css";

export default function Hero() {
  const [isVisible, setVisible] = React.useState(false);
  const domRef = React.useRef<HTMLDivElement>(null);
  React.useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => setVisible(entry.isIntersecting));
    });
    if (domRef.current !== null) {
      observer.observe(domRef.current);
    }
  }, []);

  return (
    <header>
      <nav>
        <a href="#" className="navlink">
          <Emoji symbol="🏠" label="Home" />
          <span className="navText">Home</span>
        </a>
        <a href="#" className="navlink">
          <Emoji symbol="📝" label="About me" />
          <span className="navText">About</span>
        </a>
        <a href="#" className="navlink">
          <Emoji symbol="🛠️" label="Projects" />
          <span className="navText">Projects</span>
        </a>
        <a href="#" className="navlink">
          <Emoji symbol="💼" label="History" />
          <span className="navText">History</span>
        </a>
        <a href="#" className="navlink">
          <Emoji symbol="📧" label="Contact" />
          <span className="navText">Contact</span>
        </a>
      </nav>
      <h4 className={`signature fade-in-hero ${isVisible ? "is-visible" : ""}`}>
        A personal website and portofolio <br/>by Lassi Köykkä
      </h4>
      <div className={`titleAndSubtitle fade-in-hero ${isVisible ? "is-visible" : ""}`} ref={domRef}>
        <h1 className={`title`}>
          Lassi Köykkä
        </h1>
        <h2
          className={`subtitle`}
        >
          I transform <Emoji symbol="☕" label="Coffee"/> into code, and customers into happy customers.
        </h2>
      </div>
    </header>
  );
}
