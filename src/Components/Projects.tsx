import React from "react";
import Project from "./Project";
import "./styles/Projects.css";
import Emoji from "./Emoji";

export default function Projects() {
  const [isVisible, setVisible] = React.useState(false);
  const domRef = React.useRef<HTMLHeadingElement>(null);

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
    <div className={`projects`} id='projects'>
      <h3
        className={`projectsHeader fade-in-projects ${isVisible ? "is-visible" : ""
          }`}
        ref={domRef}
      >
        <Emoji symbol="🛠️" label="hammer and wrench" /> Some of my favourite
        projects
      </h3>
      <div className="projectsGrid">
        <Project
          name="Dev job API"
          description="A RESTful API which returns parsed data about Finnish developer job postings."
          img="/img/node.png"
          link="https://github.com/Lassi-Koykka/dev-job-api"
          open={false}
        />
        <Project
          name="React portofolio"
          description="This portofolio / personal website was created using React with hooks."
          img="/img/react.png"
          link="https://github.com/Lassi-Koykka/react-portofolio"
          open={false}
        />

        <Project
          name="Cabin reservation"
          description={`A cabin reservation management system. 
          ${" "}Made with C# and WinForms (SQLite database). Final group project for a software engineering course.`}
          img="/img/CSharp.png"
          link="https://github.com/Lassi-Koykka/Mokkivaraus"
          open={false}
        />

        <Project
          name="R6 randomizer"
          description="A Python script that web scrapes data about the game and randomizes loadouts for the player"
          img="/img/python.png"
          link="https://github.com/Lassi-Koykka/R6-Loadout-Randomizer"
          open={false}
        />

        <Project
          name="Dating app sim"
          description="A simple parody game based on dating apps such as Tinder. Created with winforms and C#"
          img="/img/CSharp.png"
          link="https://github.com/Lassi-Koykka/Dating-App-Sim"
          open={false}
        />

        <Project
          name="R6 REST API"
          description="A restful API that returns data about operators and their equipment. Made with Python and Flask"
          img="/img/python.png"
          link="https://github.com/Lassi-Koykka/R6-Loadout-API"
          open={false}
        />

      </div>
    </div>
  );
}
