import React from "react";

export default function Project(props) {
  return (
    <div className="project">
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
