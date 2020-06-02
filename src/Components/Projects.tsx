import React from "react";

export default function Projects() {
  return (
    <div className="projects">
      <h3 className="headerProjects">🛠️ Some of my favourite projects</h3>
      <div className="projectsGrid">
        <div className="project">
          <img
            src="./img/scripts_thumbnail.png"
            alt="bash_thumbnail"
            className="projectThumbnail"
          />
          <a className="projectname" href="#">
            My own Bash-scripts
          </a>
          <p className="description">
            Some scripts for the Bash shell I created to speed up my workflow.
          </p>
        </div>

        <div className="project">
          <img
            src="./img/snake_thumbnail.png"
            alt="snake_thumbnail"
            className="projectThumbnail"
          />
          <a
            className="projectname"
            href="https://github.com/Lassi-Koykka/HTML5-Snake"
          >
            HTML5-snake
          </a>
          <p className="description">
            Simple Snake clone I made with HTML canvas and vanilla JS.
          </p>
        </div>

        <div className="project">
          <img alt="" className="projectThumbnail" />
          <a className="projectname">Project 3</a>
          <p className="description" />
        </div>

        <div className="project">
          <img alt="" className="projectThumbnail" />
          <a className="projectname">Project 4</a>
          <p className="description" />
        </div>

        <div className="project">
          <img alt="" className="projectThumbnail" />
          <a className="projectname">Project 5</a>
          <p className="description" />
        </div>

        <div className="project">
          <img alt="" className="projectThumbnail" />
          <a className="projectname">Project 6</a>
          <p className="description" />
        </div>
      </div>
    </div>
  );
}
