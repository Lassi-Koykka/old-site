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
  open
}: projectProps) {
  const [isOpen, setOpen] = React.useState(open);

  function toggleExpand(this: any, e: React.MouseEvent) {
    setOpen(!isOpen);
  }

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
      className={`project ${isOpen ? "open" : ""} fade-in-project ${
        isVisible ? "is-visible" : ""
      } `}
      ref={domRef}
      onClick={e => toggleExpand(e)}
    >
      <img src={img} alt="project thumbnail" className="projectThumbnail" />
      <a className="projectname" href={link}>
        {name}
      </a>
      <p className="description">{description}</p>
      <img
        className="expandArrow {}"
        src="https://img.icons8.com/color/48/000000/expand-arrow.png"
        alt="expand"
        onClick={e => toggleExpand(e)}
      />
    </div>
  );
}
