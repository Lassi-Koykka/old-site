import React from 'react';
import Job from './Job';
import "./styles/Edu.css";



export default function Edu() {
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
    <div className="eduContainer">
      <h2 className={`workHeader fade-in-edu ${isVisible ? 'visible' : ''}`}>Education</h2>
      <Job 
      jobTitle="Bachelor of Technology - Information Technology" 
      jobCompany="Savonia University of applied sciences"
      jobStart="Jan 2019" jobEnd="Spring 2022"/>
    </div>
  );
};