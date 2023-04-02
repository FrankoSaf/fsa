import React from "react";
import EKG from "../assets/EKG.png";
import "../UI/Advantages.css";
import { AnimationOnScroll } from "react-animation-on-scroll";
import "animate.css/animate.min.css";

const Advantages = () => {
  return (
    <section>
      <div class="title_deco">
        <div className="deco_cont">
          <img src={EKG} alt="title decoration" />
        </div>
        <h2>ÜBER UNS</h2>
      </div>
      <AnimationOnScroll animateIn="animate__fadeIn">
        <div className="advantages ">
          <div className="advantages_list-cont">
            Wir bieten dir den Freiraum, in dem du sowohl durch Einzel- als auch
            Gruppenunterricht die Möglichkeit hast, deine Musikalität, dein
            Talent und alles, was zur Verwirklichung deiner musikalischen Ziele
            gehört, zu entwickeln. Dabei spielt es keine Rolle, ob du erst neu
            anfängst oder schon Erfahrung mitbringst. Durch das Spielen und
            Singen bestimmter Stücke und Songs erlangen unsere Schüler das
            nötige Wissen über unterschiedliche Musikstile und lernen diese in
            der Praxis kennen. Hauptziel ist dabei immer, unsere Schüler so zu
            motivieren, sodass sie ihr inneres Gespür für Musik entwickeln und
            ohne Angst ihre Fähigkeiten austesten können. Weil du keine Nummer
            für uns bist, gibt es bei uns keinen starren Lehrplan. Wir gehen auf
            dich ein und schneiden den Unterricht gezielt auf dich und deine
            individuellen Bedürfnisse und Interessen zu. Dabei erkennen wir
            Schwachstellen und Stärken und arbeiten gemeinsam mit dir daran.
            Falls dir also in erster Linie ein tolles Ergebnis und natürlich
            auch Spaß wichtig sind, bist du bei uns genau richtig!
          </div>
        </div>
      </AnimationOnScroll>
    </section>
  );
};

export default Advantages;
