import React from "react";
import "./About.css";
const About = () => {
  return (
    <div id="about"  className="education">
      <h2 className="text-center text-violet-500 my-4">Education</h2>
    <div className="timeline">
      <div className="container left">
        <i className="icon fa fa-home"></i>
        <div className="content">
          <h2>Schooling</h2>
          <p>
            I did my schoolin from the A.K.T Academy Matric Higher Secondary
            School , Kallakurichi from my home town which laid a foundation for
            education from primary upto Higher Secondary
          </p>
        </div>
      </div>
      <div className="container right">
        <i className="icon fa fa-gift"></i>
        <div className="content">
          <h2>College - UG</h2>
          <p>
            I joined Rajalakshmi Engineering College , one of the private
            instituitions of Chennain in the year 2021 where I opted for
            Bachelor of Engineering in the field of Computer Science and
            Engineering.
          </p>
        </div>
      </div>
    </div>
    </div>
  );
};

export default About;
