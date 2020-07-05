import React from "react";
import Emoji from "./Emoji";
import "./styles/About.css";

export default function About() {
  const [isVisible, setVisible] = React.useState(false);
  const domRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        // In your case there's only one element to observe:
        if (entry.isIntersecting) {
          // Not possible to set it back to false like this:
          setVisible(true);

          // No need to keep observing:
          if (domRef.current !== null) {
            observer.unobserve(domRef.current);
          }
        }
      });
    });
    if (domRef.current !== null) {
      observer.observe(domRef.current);
    }
  }, []);

  return (
    <div
      id="about"
      className={`aboutContainer fade-in-about ${
        isVisible ? "is-visible" : ""
      }`}
    >
      <div ref={domRef}>
        <img src="/img/lassi_koykka-min.jpg" alt="Me" className={`picOfMe`} />
        <h2 className={`aboutHeader`}>
          <Emoji symbol="📝" label="pen and paper" /> About me
        </h2>
        <a href="/documents/lassi-koykka-CV.pdf" download={true}>
          <button className="downloadButton">
            {" "}
            <Emoji symbol="📄" label="document" />{" "}
            <span style={{ textDecoration: "underline" }}>Download CV</span>
          </button>
        </a>

        <div className={`aboutText`}>
          <p>
            I'm a dedicated and self-motivated developer hobbyist and
            ICT-student originally from Tampere Finland.
          </p>
          <p>
            My strengths lie in front-end web development (Vanilla JavaScript,
            React) and I'm currently taking courses and self studying back-end
            technologies such as Node.js and flask. I also have experience using
            MySql and SQLite databases.
          </p>
          <p>
            {" "}
            I'm a quick learner and I wish to understand how things actually
            operate under the hood. I thoroughly enjoy the process of creative
            problem-solving and challenging myself by setting goals and
            restrictions. On my spare time, I often like to work on all kinds of
            personal projects, from websites to games and desktop applications.
            One of my favourite pastimes is trying out new technologies and
            seeing what I can come up with. All of these projects (including
            this website) can be found on my Github.
          </p>
          <p>
            I currently reside in Kuopio and study information technology at
            Savonia University of Applied Sciences.
          </p>
        </div>
      </div>
    </div>
  );
}
