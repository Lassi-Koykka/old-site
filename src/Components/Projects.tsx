import React from "react";
import Project from "./Project";
import "./styles/Projects.css";

export default function Projects() {
  return (
    <div className="projects">
      <h3 className="headerProjects">🛠️ Some of my favourite projects</h3>
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
      </div>
    </div>
  );
}
