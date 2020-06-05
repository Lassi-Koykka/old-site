import React from "react";
import "./styles/Project.css";

export default function Project(props) {
  const [isVisible, setVisible] = React.useState(false);
  const domRef = React.useRef<HTMLDivElement>(null);
  React.useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => setVisible(entry.isIntersecting));
    });
    observer.observe(domRef.current);
  }, []);

  return (
    <div
      className={`project fade-in-project ${isVisible ? "is-visible" : ""}`}
      ref={domRef}
    >
      <img
        src={props.img}
        alt="project thumbnail"
        className="projectThumbnail"
      />
      <a className="projectname" href={props.link}>
        {props.name}
      </a>
      <p className="description">{props.description}</p>
    </div>
  );
}
