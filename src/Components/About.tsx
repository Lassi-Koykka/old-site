import React from "react";
import Emoji from "./Emoji";
import "./styles/About.css";

export default function About() {
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
    <div
      className={`aboutContainer fade-in-about ${
        isVisible ? "is-visible" : ""
      }`}
    >
      <div ref={domRef}>
        <img src="./img/lassi_koykka.jpg" alt="Me" className={`picOfMe`} />
        <h2 className={`aboutHeader`}>
          <Emoji symbol="📝" label="pen and paper" /> About me
        </h2>
        <div className={`aboutText`}>
          <p>
            I'm a dedicated and self-motivated developer hobbyist and
            ICT-student originally from Tampere Finland.
          </p>
          <p>
            My strengths lie in front-end web development (Vanilla JavaScript,
            React) and I'm currently taking courses and self studying back-end
            technologies such as Node.js and flask.
          </p>
          <p>
            {" "}
            I'm a quick learner and I wish to understand how things actually
            operate under the hood. I thoroughly enjoy the process of creative
            problem-solving and challenging myself by setting requirements and
            objectives for my work. On my spare time, I often like to work on
            all kinds of personal projects, trying out new technologies and
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
