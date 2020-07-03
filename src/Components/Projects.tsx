import React from "react";
import Project from "./Project";
import "./styles/Projects.css";
import Emoji from "./Emoji";

export default function Projects() {
  const [isVisible, setVisible] = React.useState(false);
  const domRef = React.useRef<HTMLHeadingElement>(null);

  React.useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => setVisible(entry.isIntersecting));
    });
    if (domRef.current !== null) {
      observer.observe(domRef.current);
    }
  }, []);

  return (
    <div className={`projects`}>
      <h3
        className={`projectsHeader fade-in-projects ${
          isVisible ? "is-visible" : ""
        }`}
        ref={domRef}
      >
        <Emoji symbol="🛠️" label="hammer and wrench" /> Some of my favourite
        projects
      </h3>
      <div className="projectsGrid">
        <Project
          name="HTML5 Snake"
          description="Classic snake game made with HTML canvas and vanilla JavaScript."
          img="https://img.icons8.com/color/512/000000/html-5.png"
          open={false}
        />

        <Project
          name="React portofolio"
          description="This portofolio / personal website was created using React with hooks."
          img="/img/react-logo.png"
          open={false}
        />
        <Project
          name="Shell Scripts"
          description="Some of the shell scripts I have created to speed up my workflow."
          img="https://bashlogo.com/img/symbol/svg/full_colored_dark.svg"
          open={false}
        />

        <Project
          name="R6 Randomizer"
          description="a python script that web scrapes data about the game and randomizes loadouts for the player"
          img="https://img.icons8.com/color/512/000000/python.png"
          open={false}
        />
      </div>
    </div>
  );
}
