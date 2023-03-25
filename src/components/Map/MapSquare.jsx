import React from "react";
import { BsWhatsapp } from "react-icons/bs";
import { MdPhone, MdMail } from "react-icons/md";
import "./map.css";
const MapSquare = ({ setLocation }) => {
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
        <div className="both_schools">
          <div>
            <MdMail />

            <a
              href="mailto:info@finesoundacademy.com"
              style={{ color: "white" }}
            >
              info@finesoundacademy.com
            </a>
          </div>
        </div>
      </div>
      <div className="addresses">
        <div className="neuss_address">
          <h5
            onClick={() => setLocation("Neuss")}
            style={{ cursor: "pointer" }}
          >
            Neuss
          </h5>
          <p>Neumarkt 18, 41460</p>
          <div className="phones">
            {/* <div>
              <MdPhone />
            </div> */}
            <p>01514 1273622</p>
          </div>
        </div>
        <div className="duesseldorf_address">
          <h5 onClick={setLocation("Düsseldorf")} style={{ cursor: "pointer" }}>
            Düsseldorf
          </h5>
          <p>Kaiserstraße 28, 40479</p>
          <div className="phones">
            {/* <div >
              <MdPhone />
            </div> */}
            <p>01514 1273622</p>
          </div>
        </div>
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
