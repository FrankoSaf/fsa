import React from "react";
import "./Landing.css";
import bass from "../assets/images/Bassgitarre.png";
import gitarre from "../assets/images/Gitarre.png";
import klavier from "../assets/images/Klavier.png";
import drums from "../assets/images/Schlagzeug.png";
import Gesang from "../assets/images/Gesang.png";
import lesson from "../assets/images/Lesson.jpg";
import logo from "../assets/images/Logo.png";
import school from "../assets/images/School.jpg";
import team from "../assets/images/Team.jpg";
import "animate.css/animate.min.css";
import { AnimationOnScroll } from "react-animation-on-scroll";
import {
  IoLogoInstagram,
  IoLogoFacebook,
  IoLogoYoutube,
  IoLogoWhatsapp,
} from "react-icons/io";
import { MdLocationPin, MdPhone, MdMail } from "react-icons/md";
const Landing = ({ location }) => {
  return (
    <>
      <header>
        <nav>
          <div className="nav_links">
            <div>
              <a href="https://www.instagram.com/modernmusicschoolduesseldorf/">
                <IoLogoInstagram className="social" />
              </a>
            </div>
            <div>
              <a href="https://de-de.facebook.com/MMSNeuss/">
                <IoLogoFacebook className="social" />
              </a>
            </div>
            <div>
              <a href="https://www.youtube.com/@modernmusicschoolneuss2615">
                <IoLogoYoutube className="social" />
              </a>
            </div>
          </div>
          <div className="logo">
            <img
              className="logo_img"
              src={logo}
              alt="Fine sound academy logo"
            />
          </div>
          <button className="probe_button">Kostenlose Probestunde</button>
        </nav>
        <div className="banner">
          <h1>FINE SOUND ACADEMY</h1>

          <p>
            Deine Musikschule in{" "}
            {location[0].toUpperCase() + location.slice(1, location.length)}
          </p>
        </div>
      </header>
      <main>
        <section className="instrumente">
          <h2>INSTRUMENTE: Das unrerrichten wir</h2>
          <ul className="instrument_list">
            <li>
              <img src={klavier} alt="" />
              <p>Piano</p>
            </li>
            <li>
              <img src={Gesang} alt="" />
              <p>Gesang</p>
            </li>
            <li>
              <img src={gitarre} alt="" />
              <p>Gitarre</p>
            </li>
            <li>
              <img src={bass} alt="" />
              <p>Bass</p>
            </li>
            <li>
              <img src={drums} alt="" />
              <p>Schlagzeug</p>
            </li>
          </ul>
          <button className="probe_button">Kostenlose Probestunde</button>
        </section>
        <section className="about_us">
          <h2>Fine Sound Academy</h2>
          <AnimationOnScroll
            animateIn="animate__bounceInLeft"
            animateOnce={true}
          >
            <div className="about_section">
              <div className="about_images">
                <img src={school} alt="" />
              </div>
              <ul>
                <h3>Die Schule</h3>
                <li>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Ipsam saepe sequi aspernatur nulla distinctio possimus
                  incidunt? Saepe earum laudantium tempore?
                </li>
                <li>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Reiciendis officia ratione sunt dignissimos tenetur nam
                  voluptates facilis suscipit beatae earum.
                </li>
                <li>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Reiciendis officia ratione sunt dignissimos tenetur nam
                  voluptates facilis suscipit beatae earum.
                </li>
              </ul>
            </div>
          </AnimationOnScroll>
          <AnimationOnScroll
            animateIn="animate__bounceInRight"
            animateOnce={true}
          >
            <div className="about_section">
              <ul>
                <h3>Team</h3>
                <li>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Ipsam saepe sequi aspernatur nulla distinctio possimus
                  incidunt? Saepe earum laudantium tempore?
                </li>
                <li>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Reiciendis officia ratione sunt dignissimos tenetur nam
                  voluptates facilis suscipit beatae earum.
                </li>
                <li>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Reiciendis officia ratione sunt dignissimos tenetur nam
                  voluptates facilis suscipit beatae earum.
                </li>
              </ul>
              <div className="about_images">
                <img src={team} alt="" />
              </div>
            </div>
          </AnimationOnScroll>
          <AnimationOnScroll
            animateIn="animate__bounceInLeft"
            animateOnce={true}
          >
            <div className="about_section">
              <div className="about_images">
                <img src={lesson} alt="" />
              </div>
              <ul>
                <h3>Standort</h3>
                <li>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Ipsam saepe sequi aspernatur nulla distinctio possimus
                  incidunt? Saepe earum laudantium tempore?
                </li>
                <li>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Reiciendis officia ratione sunt dignissimos tenetur nam
                  voluptates facilis suscipit beatae earum.
                </li>
                <li>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Reiciendis officia ratione sunt dignissimos tenetur nam
                  voluptates facilis suscipit beatae earum.
                </li>
              </ul>
            </div>
          </AnimationOnScroll>
          <button className="probe_button">Kostenlose Probestunde</button>
        </section>
        <section className="contact" style={{ background: "rgb(51, 51, 51)" }}>
          <h2>Buche jetzt deine kostenlose Probestunde</h2>
          <div className="contact_details">
            <form action="">
              <div>
                <input
                  type="text"
                  id="first-name"
                  placeholder="Vor- und Nachname"
                />
              </div>
              <div>
                <input type="email" id="email" placeholder="Email" />
              </div>
              <div>
                <input type="phone" id="phone" placeholder="Telefon" />
              </div>
              <div>
                <select name="instrument" id="instrument">
                  <option value="" selected disabled>
                    Instrument:
                  </option>
                  <option value="klavir">Klavir</option>
                  <option value="Gesang">Gesang</option>
                  <option value="gitarre">Gitarre</option>
                  <option value="schlagzeug">Schlagzeug</option>
                  <option value="bass">Bass</option>
                </select>
              </div>
              <div>
                <textarea
                  name="message"
                  id="message"
                  cols="30"
                  rows="10"
                  placeholder="Nachricth an uns"
                ></textarea>
              </div>
              <input type="submit" value="Buchen!" />
            </form>
            <div className="information">
              <div>
                <h3>Contact information</h3>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Suscipit, eum
                </p>
              </div>
              <div className="information_details">
                <MdLocationPin />
                {location === "Düsseldorf" ? (
                  <p>Kaiserstraße 28, 40479 Düsseldorf</p>
                ) : (
                  <p>Neumarkt 18, 41460 Neuss</p>
                )}
              </div>
              <div className="information_details">
                <MdPhone />
                <p>01514 1273622</p>
              </div>
              <div className="information_details">
                <MdMail />
                <p>t.damjanovic@modernmusicschool.com</p>
              </div>
              <div className="information_details">
                <a href="https://api.whatsapp.com/send?phone=4917664209354">
                  <button>
                    <IoLogoWhatsapp /> Whatsapp
                  </button>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Landing;
