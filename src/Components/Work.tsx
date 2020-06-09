import React from "react";
import Job from "./Job";
import Emoji from "./Emoji";
import "./styles/Work.css";

export default function Work() {
  return (
    <div className="workContainer">
      <h2 className="workHeader">
        <Emoji symbol="💼" label="Briefcase" /> Work experience
      </h2>
      <Job
        jobTitle="Summer trainee in Communications Technology"
        jobStart="May 2020"
        jobEnd="Present"
      />
      <Job
        jobTitle="Summer trainee in Communications Technology"
        jobStart="June 2019"
        jobEnd="September 2019"
      />
      <Job
        jobTitle="Machine operator"
        jobStart="May 2018"
        jobEnd="December 2018"
      />
    </div>
  );
}
