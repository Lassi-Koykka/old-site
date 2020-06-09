import React from "react";
import "./styles/Job.css";

type jobProps = {
  jobTitle: string;
  jobStart: string;
  jobEnd: string;
  jobDescription?: string;
};

export default function Job(props: jobProps) {
  return (
    <div className="job">
      <h3 className="jobTitle">{props.jobTitle}</h3>
      <h3 className="jobStartAndEnd">
        {props.jobStart} - {props.jobEnd}
      </h3>
      <p>{props.jobDescription}</p>
    </div>
  );
}
