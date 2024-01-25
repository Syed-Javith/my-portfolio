import React from "react";
import "./Home.css";
import VerticalRotateText from "./VerticalRotateText/VerticalRotateText";
import IntroPara from "./IntroPara";
import { lang } from "../../assets/data/lang";
import Language from "./Language";
const Home = () => {
  return (
    <div id="home" className="container">
      <div className="row">
        <div className="col-lg-6">
          <VerticalRotateText />
          <IntroPara />
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
      <div>
        <h3>Known Languages</h3>
        <div className="flex flex-row gap-4">   
            {
              lang.map((l) => {
                return <Language lang={l.lang} flag={l.flag} />
              })
            }
        </div>
      </div>
    </div>
  );
};

export default Home;
