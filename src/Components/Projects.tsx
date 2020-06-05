import React from "react";
import Project from "./Project";
import "./styles/Projects.css";

export default function Projects() {
  const [isVisible, setVisible] = React.useState(false);
  const domRef = React.useRef();

  React.useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => setVisible(entry.isIntersecting));
    });
    observer.observe(domRef.current);
  }, []);

  return (
    <div className={`projects`}>
      <h3
        className={`headerProjects fade-in-projects ${
          isVisible ? "is-visible" : ""
        }`}
        ref={domRef}
      >
        🛠️ Some of my favourite projects
      </h3>
      <div className="projectsGrid">
        <Project
          name="HTML5 Snake"
          description="Classic snake game made with HTML canvas and vanilla JavaScript."
          img="./img/snake_thumbnail.png"
        />

        <Project
          name="Shell scripts"
          description="Some of the shell scripts I have created to speed up my workflow."
          img="./img/scripts_thumbnail.png"
        />

        <Project name="Test" img="./img/snake_thumbnail.png" />

        <Project />

        <Project />

        <Project />
      </div>
    </div>
  );
}
