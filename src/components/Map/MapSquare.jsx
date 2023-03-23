import React from "react";
import { BsWhatsapp } from "react-icons/bs";
import { MdPhone, MdMail } from "react-icons/md";
import "./map.css";
const MapSquare = () => {
  return (
    <div className="information">
      {/* <div
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
              Genau jetzt! Wir unterrichten Kinder, Jugendliche und Erwachsene -
              bei uns ist jeder erwünscht! Unsere jahrelange Erfahrung zeigt,
              dass sich in jeder Altersstufe Erfolge erzielen lassen.
            </p>
          </div> */}
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
  );
};

export default MapSquare;
