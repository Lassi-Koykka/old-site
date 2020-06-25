import * as React from "react";
import "./styles.css";
import Hero from "./Components/Hero";
import About from "./Components/About";
import Projects from "./Components/Projects";
import Work from "./Components/Work";
import Edu  from "./Components/Education"

export default function App() {
  return (
    <div className="container">
      <Hero />
      <About />
      <Projects />
      <Work />
      <Edu />
    </div>
  );
}
