import React from "react";
import Emoji from "./Emoji";
import "./styles/Hero.css";

export default function Hero() {
  const [isVisible, setVisible] = React.useState(false);
  const domRef = React.useRef<HTMLDivElement>(null);
  
  React.useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        
        // In your case there's only one element to observe:     
        if (entry.isIntersecting) {
          
          // Not possible to set it back to false like this:
          setVisible(true);
          
          // No need to keep observing:
          if(domRef.current !== null){
            observer.unobserve(domRef.current);
          }
        }
      });
    });
      if(domRef.current !== null){
        observer.observe(domRef.current);
      }
  }, []);


  return (
    <header id="header">
      <nav>
        <a href="#header" className="navlink">
          <Emoji symbol="🏠" label="#title" />
          <span className="navText">Home</span>
        </a>
        <a href="#about" className="navlink">
          <Emoji symbol="📝" label="About me" />
          <span className="navText">About</span>
        </a>
        <a href="#projects" className="navlink">
          <Emoji symbol="🛠️" label="Projects" />
          <span className="navText">Projects</span>
        </a>
        <a href="#work" className="navlink">
          <Emoji symbol="💼" label="History" />
          <span className="navText">History</span>
        </a>
        <a href="#footer" className="navlink">
          <Emoji symbol="📧" label="Contact" />
          <span className="navText">Contact</span>
        </a>
      </nav>
      <div
        className={`fade-in-hero ${isVisible ? "is-visible" : ""}`}
        style={{ height: "100%", display: "flex", flexDirection: "column" }}
      >
        <div className={`titleAndSubtitle`} ref={domRef}>
          <h1 className={`title`}>Lassi Köykkä</h1>
          <h2 className={`subtitle`}>
            Have fun and build things <Emoji symbol="🔧" label="wrench" />
          </h2>
          <a title="GitHub" href="https://www.github.com/lassi-koykka" className="heroLink">
            <img src="/img/GitHub-Mark-Light-64px.png" alt="github" className="heroLinkPic"/>
          </a>
          <a title="Linked-in" href="https://www.linkedin.com/in/lassi-koykka/" className="heroLink">
            <img src="/img/linkedin.png" alt="LinkedIn" className="heroLinkPic"/>
          </a>
        </div>
      </div>
    </header>
  );
}
