import React from "react";
import "./About.css";
const About = () => {
  return (
    <div id="about" className="education">
      <h2 className="text-center text-violet-500 my-4 font-bold text-3xl">Education</h2>
      <div className="timeline">
        <div className="container left" data-aos="fade-right">
          <i className="icon fa fa-home"></i>
          <div className="content">
            <h2>Schooling (Higher Secondary)</h2>
            <p>
              <strong>A.K.T Academy Matric Hr. Sec. School</strong>, Kallakurichi (2020–2021).
              <br />
              Completed Higher Secondary (Biology Stream) with <strong>96.52%</strong>.
            </p>
          </div>
        </div>
        <div className="container right" data-aos="fade-left">
          <i className="icon fa fa-graduation-cap"></i>
          <div className="content">
            <h2>College - B.E. CSE</h2>
            <p>
              <strong>Rajalakshmi Engineering College</strong>, Chennai (2021–2025).
              <br />
              Bachelor of Engineering in Computer Science and Engineering with a CGPA of <strong>8.82 / 10</strong>.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
