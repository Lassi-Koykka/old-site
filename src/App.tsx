import * as React from "react";
import "./styles.css";
import Hero from "./Components/Hero";
import About from "./Components/About";
import Projects from "./Components/Projects";
import Work from "./Components/Work";
import Edu from "./Components/Education";
import Tools from "./Components/Tools";

export default function App() {
  return (
    <>
      <Hero />
      <div className="container">
        <About />
        <Tools />
        <Projects />
        <Work />
        <Edu />
      </div>
    </>
  );
}
