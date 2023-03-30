import React from "react";
import logo from "../assets/images/Logo.png";
import { IoLogoInstagram, IoLogoFacebook, IoLogoYoutube } from "react-icons/io";
import musicianBanner from "../assets/otherimages/IMG_6805.jpeg";
import "../UI/Title.css";
import "../UI/Advantages.css";
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
            <p style={{ fontSize: "2rem" }}>
              Musikunterricht in Neuss und Düsseldorf. Du möchtest ein
              Instrument lernen? Wir unterstützen dich gerne dabei.
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
        <span className="image_shadows top_shadow"></span>
        <span className="image_shadows left_shadow"></span>
        <span className="image_shadows bottom_shadow"></span>
        <img src={musicianBanner} alt="" />
      </div>
    </section>
  );
};

export default Title;
