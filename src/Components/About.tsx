import React from "react";
import "./styles/About.css";

export default function About() {
  return (
    <div className="aboutContainer">
      <img src="./img/lassi_koykka.jpg" alt="Me" className="picOfMe" />
      <h2 className="aboutTitle">📝 About me</h2>
      <div className="aboutText">
        <p>
          I'm a dedicated and self-motivated programming hobbyist and
          ICT-student originally from Tampere Finland. I thoroughly enjoy
          problem-solving and challenging myself. On my spare time, I often like
          to work on all kinds of personal projects (including this website) and
          study new technologies so I can play with them and see what I can come
          up with. Most of these projects can be found listed on my GitHub
          account. I'm a quick learner and I'm interested in how things actually
          operate under the hood.
        </p>
        <p>
          {" "}
          Currently living in Kuopio and studying information technology at
          Savonia University of Applied Sciences.
        </p>
      </div>
    </div>
  );
}
