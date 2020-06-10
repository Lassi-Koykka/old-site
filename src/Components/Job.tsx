import React from "react";
import "./styles/Job.css";

type jobProps = {
  jobTitle: string;
  jobCompany: string;
  jobStart: string;
  jobEnd: string;
  jobDescription?: string;
};

export default function Job(props: jobProps) {
  return (
    <div className="job">
      <h3 className="jobTitle">{props.jobTitle}</h3>
      <h3 className="jobCompany">{props.jobCompany}</h3>
      <h3 className="jobStartAndEnd">
        <span>{props.jobStart}</span> <span>-</span> <span>{props.jobEnd}</span>
      </h3>
      <p>{props.jobDescription}</p>
    </div>
  );
}
