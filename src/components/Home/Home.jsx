import React from "react";
import "./Home.css";
import VerticalRotateText from "./VerticalRotateText/VerticalRotateText";
const Home = () => {
  return (
    <div id="home" className="container">
      <div className="row">
        <div className="col-lg-6">
          <VerticalRotateText />
          <div className="my-4">
            <p className="text-xl">
            I am <span className="text-xl font-extrabold text-violet-500">
                Syed Javith
              </span>
              , I am excited to welcome you to my page.I describe me as an
              entusicatic , constant learner who has a view of changing life
              throw easy in technology
            </p>
            <p className="text-xl">
              Here In This page you can know me such as my education , skills
              and projects and ultimately a way to connect with me through
              social media accounts.
            </p>
          </div>
        </div>
        <div className="col-lg-6">
          <img
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
            src={require("../../assets/images/rsj.png")}
            alt=""
            className="profile-pic h-[90%] rounded-[100%]"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
