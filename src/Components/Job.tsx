import React from "react";

export default function Job(props) {
  return (
    <>
      <h3 className="jobTitle">{props.jobTitle}</h3>
      <h3 className="jobStartAndEnd">
        {props.jobStart} - {props.jobEnd}
      </h3>
      <p>{props.jobDescription}</p>
    </>
  );
}
