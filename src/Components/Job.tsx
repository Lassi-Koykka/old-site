import React from "react";
import "./styles/Job.css";

type jobProps = {
  education?: boolean;
  jobTitle: string;
  jobCompany: string;
  jobStart: string;
  jobEnd: string;
  jobDescription?: string;
};

export default function Job(props: jobProps) {
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
    <div
      className={`job ${props.education ? 'edu' : ''} fade-in-job ${isVisible ? "is-visible" : ""}`}
      ref={domRef}
    >
      <h3 className="jobTitle">{props.jobTitle}</h3>
      <h3 className="jobCompany">{props.jobCompany}</h3>
      <h3 className="jobStartAndEnd">
        <span>{props.jobStart}</span> <span>-</span> <span>{props.jobEnd}</span>
      </h3>
      <p>{props.jobDescription}</p>
    </div>
  );
}
