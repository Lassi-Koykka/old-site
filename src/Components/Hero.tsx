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
      <div
        className={`fade-in-hero ${isVisible ? "is-visible" : ""}`}
        style={{ height: "100%", display: "flex", flexDirection: "column" }}
      >
        <h4 className={`signature`}>
          A personal website and portofolio <br />
          by Lassi Köykkä
        </h4>
        <div className={`titleAndSubtitle`} ref={domRef}>
          <h1 className={`title`}>Lassi Köykkä</h1>
          <h2 className={`subtitle`}>
            I transform <Emoji symbol="☕" label="Coffee" /> into code, and
            customers into happy customers.
          </h2>
          <a href="https://www.github.com/lassi-koykka" className="heroLink">
            <img src="/img/GitHub-Mark-Light-64px.png" alt="github" className="heroLinkPic"/>
          </a>
          <a href="https://www.linkedin.com/in/lassi-koykka/" className="heroLink">
            <img src="/img/linkedin.png" alt="LinkedIn" className="heroLinkPic"/>
          </a>
        </div>
      </div>
    </header>
  );
}
