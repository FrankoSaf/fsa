import React from "react";
import logo from "../assets/images/Logo.png";
import { IoLogoInstagram, IoLogoFacebook, IoLogoYoutube } from "react-icons/io";
import musicianBanner from "../assets/otherimages/IMG-6805.jpg";
import "../UI/Title.css";
const Title = () => {
  return (
    <section className="intro">
      <div className="intro_text-container">
        <div className="info_text">
          <div className="intro_infos">
            <div className="intro_logo">
              <img src={logo} alt="School badge" />
            </div>
          </div>
          <div className="intro_titles">
            <h1>FINE SOUND ACADEMY</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit
              quis quae dolores, ab asperiores molestiae. Atque et doloremque
              eaque vero?
            </p>
            <a href="#">KOSTENLOSE PROBESTUNDE</a>
          </div>
          <div className="intro_social">
            <a href="#" className="social_links">
              <IoLogoInstagram />
            </a>
            <a href="#" className="social_links">
              <IoLogoFacebook />
            </a>
            <a href="#" className="social_links">
              <IoLogoYoutube />
            </a>
          </div>
        </div>
      </div>
      <div className="intro_image">
        <img src={musicianBanner} alt="" />
      </div>
    </section>
  );
};

export default Title;
