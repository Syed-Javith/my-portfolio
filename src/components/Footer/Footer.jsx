import { PhoneCallIcon } from "lucide-react";
import "./Footer.css";
export default function Footer() {
  return (
    <div id="contact" className="bg-violet-500">
      <footer className="container py-4 mx-auto">
        <div className="row">
          <div className="col-lg-4">
            <h3>Syed Javith</h3>
            <p>
              <span className="font-bold">Address :</span> 2/492 , Melpoondithakka , <br /> Thirukovilur Road ,{" "}
              <br />
              Thiyagadurgam.
            </p>
            <p className="flex gap-2 text-center md:justify-start justify-center">
              <PhoneCallIcon size={20} /> <a className="text-white no-underline" href="tel:6380411427">6380411427</a>
            </p>
          </div>
          <div className="col-lg-4">
            <h3>Approach Me</h3>
            <ul className="social p-0">
              <li>
                <img
                  src={require("../../assets/images/footer/instagram.png")}
                  alt="insta"
                  height={30}
                  width={30}
                />
                <a href="https://www.instagram.com/syed_javith_03/">instagram</a>
              </li>
              <li>
                <img
                  src={require("../../assets/images/footer/linkedin.png")}
                  alt="linkedin"
                  height={30}
                  width={30}
                />
                <a href="https://www.linkedin.com/in/syed-javith-r-93500a249/">LinkedIn</a>
              </li>
              <li>
                <img
                  src={require("../../assets/images/footer/whatsapp.png")}
                  alt="wp"
                  height={30}
                  width={30}
                />
                <a href="https://api.whatsapp.com/send?phone=6380411427">WhatsApp</a>
              </li>
              <li>
                <img
                  src={require("../../assets/images/icons/git.png")}
                  alt="git"
                  height={30}
                  width={30}
                />
                <a href="https://github.com/Syed-Javith/">GitHub</a>
              </li>
            </ul>
          </div>
          <div className="col-lg-4 social">
            <h3>Quick Links</h3>
            <ul className="p-0">
              <li>
                <a href="#home">Home</a>
              </li>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#skills">Skills</a>
              </li>
              <li>
                <a href="#projects">Projects</a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
}
