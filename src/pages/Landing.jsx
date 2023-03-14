import React from "react";
import "./Landing.css";
import bass from "../assets/images/Bassgitarre.png";
import gitarre from "../assets/images/Gitarre.png";
import klavier from "../assets/images/Klavier.png";
import drums from "../assets/images/Schlagzeug.png";
import Gesang from "../assets/images/Gesang.png";
import logo from "../assets/images/Logo.png";
import school from "../assets/images/School.jpg";
import team from "../assets/images/Team.jpg";
import "animate.css/animate.min.css";
import { AnimationOnScroll } from "react-animation-on-scroll";
import { IoLogoInstagram, IoLogoFacebook, IoLogoYoutube } from "react-icons/io";
import { BsWhatsapp, BsCheckCircleFill } from "react-icons/bs";
import { MdPhone, MdMail } from "react-icons/md";
import { useState, useEffect } from "react";
import bassBanner from "../assets/otherimages/bass-6024074.jpg";
import drumsBanner from "../assets/otherimages/drums-2599508.jpg";
import handsBanner from "../assets/otherimages/hands-1851500.jpg";
import mainBanner from "../assets/images/Banner.jpg";
import musicianBanner from "../assets/otherimages/musician-2943109.jpg";
import microphoneBanner from "../assets/otherimages/microphone-780178.jpg";
const images = [
  mainBanner,
  handsBanner,
  bassBanner,
  musicianBanner,
  drumsBanner,
];
const Landing = ({ location }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((currentImageIndex + 1) % images.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [currentImageIndex]);

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
          <a href="#contact_form" style={{ flex: "calc(1 / 3)" }}>
            <button className="probe_button">Kostenlose Probestunde</button>
          </a>
        </nav>
        <div
          className="banner"
          style={{
            background: `linear-gradient(to right,  rgba(32, 32, 32, 0.589), rgba(8, 8, 8, 0.76), rgba(0, 0, 0, 0.884)),url(${images[currentImageIndex]}) center/cover no-repeat`,
            height: "80vh",
            margin: "0 auto",
            textAlign: "center",

            color: "white",
            marginTop: "2rem",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div className="shadow top_shadow"></div>
          <h1>FINE SOUND ACADEMY</h1>

          <p>
            Deine Musikschule in{" "}
            {location[0].toUpperCase() + location.slice(1, location.length)}
          </p>
          <div className="shadow bottom_shadow"></div>
        </div>
      </header>
      <main>
        <section className="instrumente">
          <h2>INSTRUMENTE: Das unterrichten wir</h2>
          <ul className="instrument_list">
            <li>
              <div>
                <img src={klavier} alt="" />
              </div>
              <h4>Klavier</h4>
              <p className="instrument-text">
                Wegen seiner Vielseitigkeit und großen Bandbreite besonders
                beliebt. Im Klavierunterricht lernst du alles, was dazu gehört,
                um über das reine Klimpern auf den Tasten hinaus zu kommen.
              </p>
            </li>
            <li>
              <div>
                <img src={Gesang} alt="" />
              </div>
              <h4>Gesang</h4>
              <p className="instrument-text">
                {" "}
                Das wohl persönlichste aller Instrumente: deine Stimme. Erlerne
                im Gesangsunterricht alles von der richtigen Atemtechnik, Klang-
                und Stimmbildung bishin zur Performance.
              </p>
            </li>
            <li>
              <div>
                <img src={gitarre} alt="" />
              </div>
              <h4>Gitarre</h4>
              <p className="instrument-text">
                Die Geschicklichkeit von Gitarristen fasziniert dich und du
                träumst davon, dein eigenes Solo zu spielen? Ob E- oder
                Konzertgitarre - meistere die Saiten mithilfe unserer Anleitung
                im Gitarrenunterricht.
              </p>
            </li>
            <li>
              <div>
                <img src={bass} alt="" />
              </div>
              <h4>Bass</h4>
              <p className="instrument-text">
                Oft unterschätzt, jedoch unverzichtbar. Für alle Fans der tiefen
                Klänge und alle, die originell sind, ist der Bassunterricht das
                Richtige. Verbinde hierbei Harmonie und Rhythmus.
              </p>
            </li>
            <li>
              <div>
                <img src={drums} alt="" />
              </div>
              <h4>Schlagzeug</h4>
              <p className="instrument-text">
                Du steckst voller Energie und möchtest gerne den Takt angeben?
                Trainiere im Schlagzeugunterricht deine Koordinationsfähigkeit
                und dein Taktgefühl mit vollem Körpereinsatz.
              </p>
            </li>
          </ul>
          <a href="#contact_form">
            <button className="probe_button">
              Buche jetzt deine kostenlose Probestunde
            </button>
          </a>
        </section>
        <section className="about_us">
          <h2>Fine Sound Academy</h2>
          <AnimationOnScroll
            animateIn="animate__fadeIn"
            animateOnce={true}
            style={{ width: "100%" }}
          >
            <div className="about_section">
              <div className="about_images">
                <img
                  className="logo_img"
                  src={logo}
                  alt="Fine sound academy logo"
                />
              </div>
              <ul className="about_list-main">
                <h3>Über uns</h3>
                <li>
                  Du möchtest ein Instrument lernen? Wir unterstützen dich gerne
                  dabei. Wir bieten dir den Freiraum, in dem du sowohl durch
                  Einzel- als auch Gruppenunterricht die Möglichkeit hast, deine
                  Musikalität, dein Talent und alles, was zur Verwirklichung
                  deiner musikalischen Ziele gehört, zu entwickeln. Dabei spielt
                  es keine Rolle, ob du erst neu anfängst oder schon Erfahrung
                  mitbringst.
                </li>
                <li>
                  Durch das Spielen und Singen bestimmter Stücke und Songs
                  erlangen unsere Schüler das nötige Wissen über
                  unterschiedliche Musikstile und lernen diese in der Praxis
                  kennen. Hauptziel ist dabei immer, unsere Schüler so zu
                  motivieren, sodass sie ihr inneres Gespür für Musik entwickeln
                  und ohne Angst ihre Fähigkeiten austesten können.
                </li>
                <li>
                  Weil du keine Nummer für uns bist, gibt es bei uns keinen
                  starren Lehrplan. Wir gehen auf dich ein und schneiden den
                  Unterricht gezielt auf dich und deine individuellen
                  Bedürfnisse und Interessen zu. Dabei erkennen wir
                  Schwachstellen und Stärken und arbeiten gemeinsam mit dir
                  daran.
                </li>
                <li>
                  Falls dir also in erster Linie ein tolles Endergebnis und
                  natürlich auch Spaß wichtig sind, bist du bei uns an der
                  richtigen Adresse!
                </li>
              </ul>
            </div>
          </AnimationOnScroll>
          <AnimationOnScroll
            animateIn="animate__fadeIn"
            animateOnce={true}
            style={{ width: "100%" }}
          >
            <div className="offer_section">
              <h3>Unser Angebot</h3>
              <div className="offer">
                <div className="offer_square">
                  <h4>Tarif SOLO</h4>
                  <p>
                    Einzelunterricht: voller Fokus auf dich und dein Instrument
                  </p>
                  <ul className="tarif_list">
                    <li>
                      <BsCheckCircleFill className="list_check" />
                      30 oder 45 min
                    </li>
                    <li>
                      <BsCheckCircleFill className="list_check" />
                      ab 85€/Monat
                    </li>
                    <li>
                      <BsCheckCircleFill className="list_check" />
                      3,6 oder 12 Monate Vertragslaufzeit
                    </li>
                    <li>
                      <BsCheckCircleFill className="list_check" />
                      Kostenlose Probestunde
                    </li>
                  </ul>
                </div>
                <div className="offer_square">
                  <h4>Tarif GRUPPE</h4>
                  <p>
                    Gruppenunterricht: mehr Spaß und Freude am gemeinsamen Musik
                    machen
                  </p>
                  <ul className="tarif_list">
                    <li>
                      <BsCheckCircleFill className="list_check" />
                      30 oder 45 min
                    </li>
                    <li>
                      <BsCheckCircleFill className="list_check" />
                      2-4 Teilnehmer
                    </li>
                    <li>
                      <BsCheckCircleFill className="list_check" />
                      ab 69€/Monat
                    </li>
                    <li>
                      <BsCheckCircleFill className="list_check" />6 Monate
                      Vertragslaufzeit
                    </li>
                    <li>
                      <BsCheckCircleFill className="list_check" />
                      Kostenlose Probestunde
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </AnimationOnScroll>
          <a href="#contact_form">
            <button className="probe_button">Jetzt Termin vereinbaren</button>
          </a>
        </section>
        <section className="contact">
          <h2>Buche jetzt deine kostenlose Probestunde</h2>
          <div className="contact_details">
            <div className="information">
              <div
                className="contact_intro"
                style={{
                  borderBottom: "2px #cfa528 solid",
                  marginBottom: "2rem",
                }}
              >
                <h3 style={{ fontSize: "3rem", color: "#cfa528" }}>
                  Anmeldung zur kostenlosen Probestunde
                </h3>
                <p
                  style={{
                    width: "60ch",
                    marginBottom: "2rem",
                  }}
                >
                  Wann ist der richtige Zeitpunkt um ein Instrument zu erlernen?
                  Genau jetzt! Wir unterrichten Kinder, Jugendliche und
                  Erwachsene - bei uns ist jeder erwünscht! Unsere jahrelange
                  Erfahrung zeigt, dass sich in jeder Altersstufe Erfolge
                  erzielen lassen.
                </p>
              </div>
              <div className="information_details">
                <div className="svg-holder">
                  <MdPhone />
                </div>
                <p>01514 1273622</p>
              </div>
              <div className="information_details">
                <div className="svg-holder">
                  <MdMail />
                </div>
                <p>t.damjanovic@modernmusicschool.com</p>
              </div>
              <div className="whatsapp">
                <a href="https://api.whatsapp.com/send?phone=4917664209354">
                  <button>
                    <BsWhatsapp /> Whatsapp
                  </button>
                </a>
              </div>
              <div className="information_details">
                {location === "Düsseldorf" ? (
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2498.1947540757183!2d6.776958851886429!3d51.233908038382665!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47b8ca1ff5bfb4df%3A0x18e93d4c1c37df9d!2sModern%20Music%20School%20D%C3%BCsseldorf%20-%20Musikschule%20-%20Musikunterricht!5e0!3m2!1shr!2sde!4v1678542146410!5m2!1shr!2sde"
                    width="600"
                    height="350"
                    style={{ border: "0", borderRadius: "10px" }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                ) : (
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2499.988033289749!2d6.685724802280624!3d51.20087217580428!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47b8b454dc1dc957%3A0xcf17b9f87f4bf3cb!2sModern%20Music%20School%20Neuss%20%7C%20Musikschule%20%7C%20Musikunterricht%20%7C!5e0!3m2!1shr!2sde!4v1678541976060!5m2!1shr!2sde"
                    width="600"
                    height="350"
                    style={{ border: "0", borderRadius: "10px" }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                )}
              </div>
            </div>
            <form action="" id="contact_form">
              <div>
                <select name="instrument" id="instrument">
                  <option value="" selected disabled>
                    Anrede:
                  </option>
                  <option value="klavir">Herr</option>
                  <option value="Gesang">Frau</option>
                </select>
              </div>
              <div>
                <input
                  type="text"
                  id="first-name"
                  placeholder="Vor- und Nachname"
                  className="inputs"
                />
              </div>
              <div>
                <input
                  type="email"
                  id="email"
                  placeholder="Email"
                  className="inputs"
                />
              </div>
              <div>
                <input
                  type="phone"
                  id="phone"
                  placeholder="Telefon"
                  className="inputs"
                />
              </div>
              <div className="who_radio">
                <div>
                  <input type="checkbox" name="mich" id="mich" />
                  <label htmlFor="mich">
                    Ich möchte <span>mich selbst</span> anmelden.
                  </label>
                </div>
                <div>
                  <input type="checkbox" name="kinder" id="kinder" />
                  <label htmlFor="kinder">
                    Ich möchte <span>mein Kind/meine Kinder</span> anmelden.
                  </label>
                </div>
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
          </div>
        </section>
      </main>
    </>
  );
};

export default Landing;
