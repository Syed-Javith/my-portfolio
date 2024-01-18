import React from 'react'
import "./Home.css"
import VerticalRotateText from './VerticalRotateText/VerticalRotateText'
const Home = () => {
  return (
    <div id="home" className="container">
      <div className="row">
        <div className="col-lg-6">
        <VerticalRotateText />
        <p>
        I am <span className="text-xl font-extrabold text-violet-500">Syed Javith</span> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae culpa laboriosam corporis, odit soluta omnis quo sunt cupiditate facilis ex commodi, vero accusamus dolorem doloribus nostrum eum molestiae, et accusantium.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo nisi, autem facilis tempora nam culpa est cumque velit eveniet tempore, odio obcaecati, officiis repellendus repudiandae et. Exercitationem similique eveniet odit.
        </p>
        </div>
        <div className="col-lg-6">
            <img data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000" src={require("../../assets/images/rsj.png")} alt="" className="profile-pic h-[90%] rounded-[100%]" />
        </div>
      </div>
    </div>
  )
}

export default Home
