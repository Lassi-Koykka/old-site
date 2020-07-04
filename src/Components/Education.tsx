import React from "react";
import Job from "./Job";
import Emoji from "./Emoji";
import "./styles/Edu.css";

export default function Edu() {
  const [isVisible, setVisible] = React.useState(false);
  const domRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        
        // In your case there's only one element to observe:     
        if (entry.isIntersecting) {
          
          // Not possible to set it back to false like this:
          setVisible(true);
          
          // No need to keep observing:
          if(domRef.current !== null){
            observer.unobserve(domRef.current);
          }
        }
      });
    });
      if(domRef.current !== null){
        observer.observe(domRef.current);
      }
  }, []);

  return (
    <div className="eduContainer">
      <h2
        className={`workHeader fade-in-edu ${isVisible ? "is-visible" : ""}`}
        ref={domRef}
      >
        <Emoji symbol="🎓" label="Graduation cap" /> Education
      </h2>
      <Job
        education={true}
        jobTitle="Bachelor of Technology - Information Technology"
        jobCompany="Savonia University of applied sciences"
        jobStart="Jan 2019"
        jobEnd="Spring 2022"
      />

      <Job
        education={true}
        jobTitle="Finnish matriculation examination"
        jobCompany="Tampereen klassillinen lukio"
        jobStart="Aug 2015"
        jobEnd="May 2018"
      />
    </div>
  );
}
