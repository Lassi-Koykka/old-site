import React from "react";
import "./styles/Project.css";

type projectProps = {
  img?: string;
  link?: string;
  name?: string;
  description?: string;
  open?: boolean;
};

export default function Project({
  img,
  link,
  name,
  description,
  open,
}: projectProps) {
  const [isOpen, setOpen] = React.useState(open);

  function toggleExpand(this: any, e: React.MouseEvent) {
    setOpen(!isOpen);
  }

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
    <div
      className={`outerProject ${isOpen ? "open" : ""} fade-in-project ${
        isVisible ? "is-visible" : ""
      } `}
      ref={domRef}
    >
      <div className="innerProject">
        <div className="projectFront" onClick={(e) => e.preventDefault}>
          <img src={img} alt="project thumbnail" className="projectThumbnail" />
          <a className="projectname" href={link} onClick={(e) => e.preventDefault}>
            {name}
          </a>
        </div>
        <img
          className="expandArrow {}"
          src="/react-portofolio/img/around-arrow.png"
          alt="expand"
          onClick={(e) => toggleExpand(e)}
        />
        <div className="projectBack" onClick={(e) => toggleExpand(e)}>
          <p className="description">{description}</p>
        </div>
      </div>
    </div>
  );
}
