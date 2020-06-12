import React from "react";
import Job from "./Job";
import Emoji from "./Emoji";
import "./styles/Work.css";

export default function Work() {
  const [isVisible, setVisible] = React.useState(false);
  const domRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => setVisible(entry.isIntersecting));
    });
    if (domRef.current !== null) {
      observer.observe(domRef.current);
    }
  }, []);

  return (
    <div className="workContainer">
      <h2
        className={`workHeader fade-in-work ${isVisible ? "is-visible" : ""}`}
        ref={domRef}
      >
        <Emoji symbol="💼" label="Briefcase" /> Work experience
      </h2>
      <Job
        jobTitle="Summer trainee in Communications Technology"
        jobCompany="Istekki Oy"
        jobStart="May 2020"
        jobEnd="Present"
      />
      <Job
        jobTitle="Summer trainee in Communications Technology"
        jobCompany="Istekki Oy"
        jobStart="June 2019"
        jobEnd="Sept. 2019"
      />
      <Job
        jobTitle="Machine operator"
        jobCompany="Honpumet Oy"
        jobStart="May 2018"
        jobEnd="Dec. 2018"
      />
    </div>
  );
}
