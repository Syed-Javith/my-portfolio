import { PhoneCallIcon, MailIcon, MapPinIcon } from "lucide-react";
import "./Footer.css";

export default function Footer() {
  return (
    <div id="contact" className="bg-violet-600 text-white">
      <footer className="container py-8 mx-auto">
        <div className="row">
          <div className="col-lg-4 mb-4">
            <h3 className="font-bold text-xl mb-3">Syed Javith R</h3>
            <p className="flex items-center gap-2 mb-2">
              <MapPinIcon size={18} /> Guduvancheri, Chengalpattu, Tamil Nadu - 603202
            </p>
            <p className="flex items-center gap-2 mb-2">
              <MailIcon size={18} />
              <a className="text-white hover:underline" href="mailto:syedjavith14@gmail.com">
                syedjavith14@gmail.com
              </a>
            </p>
            <p className="flex items-center gap-2">
              <PhoneCallIcon size={18} />
              <a className="text-white hover:underline" href="tel:+916380411427">
                +91 6380411427
              </a>
            </p>
          </div>
          <div className="col-lg-4 mb-4">
            <h3 className="font-bold text-xl mb-3">Connect With Me</h3>
            <ul className="social p-0 space-y-2">
              <li className="flex items-center gap-2">
                <img
                  src={require("../../assets/images/footer/linkedin.png")}
                  alt="LinkedIn"
                  height={24}
                  width={24}
                />
                <a className="hover:underline" href="https://www.linkedin.com/in/syed-javith-r-93500a249/" target="_blank" rel="noopener noreferrer">
                  LinkedIn
                </a>
              </li>
              <li className="flex items-center gap-2">
                <img
                  src={require("../../assets/images/icons/git.png")}
                  alt="GitHub"
                  height={24}
                  width={24}
                />
                <a className="hover:underline" href="https://github.com/Syed-Javith/" target="_blank" rel="noopener noreferrer">
                  GitHub
                </a>
              </li>
              <li className="flex items-center gap-2">
                <img
                  src={require("../../assets/images/footer/whatsapp.png")}
                  alt="WhatsApp"
                  height={24}
                  width={24}
                />
                <a className="hover:underline" href="https://api.whatsapp.com/send?phone=916380411427" target="_blank" rel="noopener noreferrer">
                  WhatsApp
                </a>
              </li>
              <li className="flex items-center gap-2">
                <img
                  src={require("../../assets/images/footer/instagram.png")}
                  alt="Instagram"
                  height={24}
                  width={24}
                />
                <a className="hover:underline" href="https://www.instagram.com/syed_javith_03/" target="_blank" rel="noopener noreferrer">
                  Instagram
                </a>
              </li>
            </ul>
          </div>
          <div className="col-lg-4 social mb-4">
            <h3 className="font-bold text-xl mb-3">Quick Links</h3>
            <ul className="p-0 space-y-1">
              <li><a className="hover:underline" href="#home">Home</a></li>
              <li><a className="hover:underline" href="#experience">Experience</a></li>
              <li><a className="hover:underline" href="#about">Education</a></li>
              <li><a className="hover:underline" href="#skills">Skills</a></li>
              <li><a className="hover:underline" href="#projects">Projects</a></li>
            </ul>
          </div>
        </div>
        <div className="text-center pt-4 border-t border-violet-400 text-sm">
          &copy; {new Date().getFullYear()} Syed Javith R. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
