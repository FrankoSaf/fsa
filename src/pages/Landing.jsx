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
              <h4>Klavier</h4>
              <p className="instrument-text">
                Wegen seiner Vielseitigkeit und großen Bandbreite besonders
                beliebt. Im Klavierunterricht lernst du alles, was dazu gehört,
                um über das reine Klimpern auf den Tasten hinaus zu kommen.
              </p>
            </li>
            <li>
              <img src={Gesang} alt="" />
              <h4>Gesang</h4>
              <p className="instrument-text">
                {" "}
                Das wohl persönlichste aller Instrumente: deine Stimme. Erlerne
                im Gesangsunterricht alles von der richtigen Atemtechnik, Klang-
                und Stimmbildung bishin zur Performance.
              </p>
            </li>
            <li>
              <img src={gitarre} alt="" />
              <h4>Gitarre</h4>
              <p className="instrument-text">
                Die Geschicklichkeit von Gitarristen fasziniert dich und du
                träumst davon, dein eigenes Solo zu spielen? Ob E- oder
                Konzertgitarre - meistere die Saiten mithilfe unserer Anleitung
                im Gitarrenunterricht.
              </p>
            </li>
            <li>
              <img src={bass} alt="" />
              <h4>Bass</h4>
              <p className="instrument-text">
                Oft unterschätzt, jedoch unverzichtbar. Für alle Fans der tiefen
                Klänge und alle, die originell sind, ist der Bassunterricht das
                Richtige. Verbinde hierbei Harmonie und Rhythmus.
              </p>
            </li>
            <li>
              <img src={drums} alt="" />
              <h4>Schlagzeug</h4>
              <p className="instrument-text">
                Du steckst voller Energie und möchtest gerne den Takt angeben?
                Trainiere im Schlagzeugunterricht deine Koordinationsfähigkeit
                und dein Taktgefühl mit vollem Körpereinsatz.
              </p>
            </li>
          </ul>
          <button className="probe_button">Kostenlose Probestunde</button>
        </section>
        <section className="about_us">
          <h2>Fine Sound Academy</h2>
          <AnimationOnScroll animateIn="animate__fadeIn" animateOnce={true}>
            <div className="about_section">
              <div className="about_images">
                <img src={school} alt="" />
              </div>
              <ul className="about_list-main">
                <h3>Die Schule</h3>
                <li>
                  - Du möchtest ein Instrument lernen? Wir unterstützen dich
                  gerne dabei. Wir bieten dir den Freiraum, in dem du sowohl
                  durch Einzel- als auch Gruppenunterricht die Möglichkeit hast,
                  deine Musikalität, dein Talent und alles, was zur
                  Verwirklichung deiner musikalischen Ziele gehört, zu
                  entwickeln. Dabei spielt es keine Rolle, ob du erst neu
                  anfängst oder schon Erfahrung mitbringst.
                </li>
                <li>
                  - Durch das Spielen und Singen bestimmter Stücke und Songs
                  erlangen unsere Schüler das nötige Wissen über
                  unterschiedliche Musikstile und lernen diese in der Praxis
                  kennen. Hauptziel ist dabei immer, unsere Schüler so zu
                  motivieren, sodass sie ihr inneres Gespür für Musik entwickeln
                  und ohne Angst ihre Fähigkeiten austesten können.
                </li>
                <li>
                  - Weil du keine Nummer für uns bist, gibt es bei uns keinen
                  starren Lehrplan. Wir gehen auf dich ein und schneiden den
                  Unterricht gezielt auf dich und deine individuellen
                  Bedürfnisse und Interessen zu. Dabei erkennen wir
                  Schwachstellen und Stärken und arbeiten gemeinsam mit dir
                  daran.
                </li>
                <li>
                  - Falls dir also in erster Linie ein tolles Endergebnis und
                  natürlich auch Spaß wichtig sind, bist du bei uns an der
                  richtigen Adresse!
                </li>
              </ul>
            </div>
          </AnimationOnScroll>
          <AnimationOnScroll animateIn="animate__fadeIn" animateOnce={true}>
            <div className="about_section">
              <ul className="about_list-main">
                <h3>Unser Angebot</h3>
                <li>
                  <h4>Tarif SOLO</h4>
                  <p>
                    Einzelunterricht: voller Fokus auf dich und dein Instrument.
                  </p>
                  <ul className="tarif_list">
                    <li>
                      <BsCheckCircleFill className="list_check" />
                      30 oder 45 min
                    </li>
                    <li>
                      <BsCheckCircleFill className="list_check" />
                      ab 85$/Monat
                    </li>
                    <li>
                      <BsCheckCircleFill className="list_check" />
                      3,6 oder 12 Monate Vertragslauferzeit
                    </li>
                    <li>
                      <BsCheckCircleFill className="list_check" />
                      Kostenlose Probestunde
                    </li>
                  </ul>
                </li>
                <li>
                  <h4>Tarif GRUPPE</h4>
                  <p>- mehr Spaß und Freude am gemeinsamen Musik machen</p>
                  <ul className="tarif_list">
                    <li>
                      <BsCheckCircleFill className="list_check" />
                      30 oder 45 min
                    </li>
                    <li>
                      <BsCheckCircleFill className="list_check" />
                      2-4 Tielnehmer
                    </li>
                    <li>
                      <BsCheckCircleFill className="list_check" />
                      ab 69$/Monat
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
                </li>
              </ul>
              <div className="about_images">
                <img src={team} alt="" />
              </div>
            </div>
          </AnimationOnScroll>
          <button className="probe_button">Kostenlose Probestunde</button>
        </section>
        <section className="contact" style={{ background: "rgb(30, 30, 30)" }}>
          <h2>Buche jetzt deine kostenlose Probestunde</h2>
          <div className="contact_details">
            <div className="information">
              <div className="contact_intro">
                <h3>Contact information</h3>
                <p style={{ width: "60ch" }}>
                  Wann ist der richtige Zeitpunkt um ein Instrument zu erlernen?
                  Genau jetzt! Wir unterrichten Kinder, Jugendliche und
                  Erwachsene - bei uns ist jeder erwünscht! Unsere jahrelange
                  Erfahrung zeigt, dass sich in jeder Altersstufe Erfolge
                  erzielen lassen.
                </p>
              </div>
              <div className="information_details">
                <div className="svg-holder">
                  <MdLocationPin />
                </div>
                {location === "Düsseldorf" ? (
                  <p>Kaiserstraße 28, 40479 Düsseldorf</p>
                ) : (
                  <p>Neumarkt 18, 41460 Neuss</p>
                )}
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
            </div>
            <form action="">
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
