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
            I did my schooling from the A.K.T Academy Matric Higher Secondary
            School ,Kallakurichi from my home town where I studied from primary upto Higher Secondary
          </p>
        </div>
      </div>
      <div className="container right">
        <i className="icon fa fa-gift"></i>
        <div className="content">
          <h2>College - UG</h2>
          <p>
            I joined Rajalakshmi Engineering College ,a private
            instituition in Chennai in the year 2021 where I opted for
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
