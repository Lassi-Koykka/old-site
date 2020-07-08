import React from "react";
import "./styles/Footer.css";

export default function Footer() {
  return (
    <footer className="footer" id="footer">
      <div className="footerUpper">
        <div className="hiring">
          <h2 className="hiringHeader">Hiring?</h2>
          <p className="hiringText">
            Currently my full-time studies are taking up most of my time (except
            during summers), but I am open to remote or part-time job
            opportunities that would allow me to work on the side of school.
          </p>
        </div>
        <p className="emailText">
          If you would like to be in touch, you can{" "}
          <a
            className="email"
            href="mailto:me@lassi-koykka.fi?subject=Hey!"
          >
            email me
          </a>{" "} or send a connection request on <a className='email' href="https://www.linkedin.com/in/lassi-koykka">LinkedIn</a>
          {" "} and I'll get back to you as soon as I can.{" "}
        </p>
      </div>
        <small className="copyright">© Lassi Köykkä 2020</small>
    </footer>
  );
}
