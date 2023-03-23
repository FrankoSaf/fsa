import React from "react";
import "./Landing.css";

import logo from "../assets/images/Logo.png";
import "animate.css/animate.min.css";
import { AnimationOnScroll } from "react-animation-on-scroll";
import { IoLogoInstagram, IoLogoFacebook, IoLogoYoutube } from "react-icons/io";
import { BsWhatsapp, BsCheckCircleFill } from "react-icons/bs";
import { MdPhone, MdMail } from "react-icons/md";
import { useState, useEffect } from "react";
import bassBanner from "../assets/otherimages/bass-6024074.jpg";
import drumsBanner from "../assets/otherimages/drums-2599508.jpg";
import handsBanner from "../assets/otherimages/hands-1851500.jpg";
import musicianBanner from "../assets/otherimages/musician-2943109.jpg";
import Map from "../components/Map/Map";
import { instrumentsList } from "../assets/instrumentList";
import CrossfadeImage from "react-crossfade-image";
const images = [handsBanner, bassBanner, musicianBanner, drumsBanner];
const Landing = ({ location }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((currentImageIndex + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [currentImageIndex]);
  const location1 = {
    center: { lat: 51.200934234153095, lng: 6.6902485237841995 },
    lat: 51.200934234153095,
    lng: 6.6902485237841995,
  };
  console.log(instrumentsList);
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
        <div className="banner">
          <CrossfadeImage
            style={{
              width: "100%",
              height: "100%",
              position: "relative",
              zIndex: "-1",
            }}
            duration={4000}
            src={images[currentImageIndex]}
            alt=""
          />
          <div className="shadow top_shadow"></div>
          <div class="banner_text">
            <h1>FINE SOUND ACADEMY</h1>

            <p>
              Deine Musikschule in{" "}
              {location[0].toUpperCase() + location.slice(1, location.length)}
            </p>
          </div>
          <div className="shadow bottom_shadow"></div>
        </div>
      </header>
      <main>
        <section className="instrumente">
          <h2>INSTRUMENTE: Das unterrichten wir</h2>

          <ul className="instrument_list">
            {instrumentsList.map((instrument, index) => {
              return (
                <AnimationOnScroll
                  animateIn="animate__fadeInRight"
                  animateOnce={true}
                  duration="1"
                  delay={index === 0 ? 250 : `${(index + 1) * 500}`}
                >
                  <li>
                    <div>
                      <img src={instrument.image} alt="" />
                    </div>
                    <h4>{instrument.inName}</h4>
                    <p className="instrument-text">{instrument.text}</p>
                  </li>
                </AnimationOnScroll>
              );
            })}
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
                  <h4>Tarif SOLO 30</h4>
                  <p>
                    Einzelunterricht: voller Fokus auf dich und dein Instrument
                  </p>
                  <ul className="tarif_list">
                    <li>
                      <BsCheckCircleFill className="list_check" />
                      30 min
                    </li>
                    <li>
                      <BsCheckCircleFill className="list_check" />
                      ab 85€/Monat
                    </li>
                    <li>
                      <BsCheckCircleFill className="list_check" />
                      3, 6 oder 12 Monate Vertragslaufzeit
                    </li>
                    <li>
                      <BsCheckCircleFill className="list_check" />
                      Kostenlose Probestunde
                    </li>
                  </ul>
                </div>
                <div className="offer_square">
                  <h4>Tarif SOLO 45</h4>
                  <p>
                    Einzelunterricht: voller Fokus auf dich und dein Instrument
                  </p>
                  <ul className="tarif_list">
                    <li>
                      <BsCheckCircleFill className="list_check" />
                      45 min
                    </li>
                    <li>
                      <BsCheckCircleFill className="list_check" />
                      ab 128€/Monat
                    </li>
                    <li>
                      <BsCheckCircleFill className="list_check" />
                      3, 6 oder 12 Monate Vertragslaufzeit
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
        </section>

        <Map location={location1} zoomLevel={17} />
      </main>
    </>
  );
};

export default Landing;
