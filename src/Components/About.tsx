import React from "react";
import "./styles/About.css";

export default function About() {
  const [isVisible, setVisible] = React.useState(false);
  const domRef = React.useRef<HTMLAllCollection>(null);
  React.useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => setVisible(entry.isIntersecting));
    });
    observer.observe(domRef.current);
  }, []);

  return (
    <div className={`aboutContainer`}>
      <div ref={domRef}>
        <img
          src="./img/lassi_koykka.jpg"
          alt="Me"
          className={`picOfMe fade-in-about ${isVisible ? "is-visible" : ""}`}
        />
        <h2
          className={`aboutTitle fade-in-about ${
            isVisible ? "is-visible" : ""
          }`}
        >
          📝 About me
        </h2>
        <div
          className={`aboutText fade-in-about ${isVisible ? "is-visible" : ""}`}
        >
          <p>
            I'm a dedicated and self-motivated programming hobbyist and
            ICT-student originally from Tampere Finland. I thoroughly enjoy
            problem-solving and challenging myself. On my spare time, I often
            like to work on all kinds of personal projects (including this
            website) and study new technologies so I can play with them and see
            what I can come up with. Most of these projects can be found listed
            on my GitHub account. I'm a quick learner and I'm interested in how
            things actually operate under the hood.
          </p>
          <p>
            Currently living in Kuopio and studying information technology at
            Savonia University of Applied Sciences.
          </p>
        </div>
      </div>
    </div>
  );
}
