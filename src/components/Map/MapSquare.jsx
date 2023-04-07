import React from "react";
import { BsWhatsapp } from "react-icons/bs";

import "./map.css";
const MapSquare = ({ location }) => {

  return (
    <div className="contact_square">
      <div className="contact_details">
        <div className="contact_details-sub">
          <div className="contact-image">
            <img
              src="https://res.cloudinary.com/dnp7nm4iy/image/upload/c_scale,w_140/v1680351132/Adresse_eewpng.png"
              alt="Adresse icon"
            />
          </div>
          <div className="contact-text">
            <h5 className="contact-title">Adresse:</h5>
            {location === "neuss" ? (
              <>
                <p>Neumarkt 18</p>
                <p>41460 Neuss</p>
              </>
            ) : (
              <>
                <p>Kaiserstraße 28</p>
                <p>40479 Düsseldorf</p>
              </>
            )}
          </div>
        </div>
        <div className="contact_details-sub">
          <div className="contact-image">
            <img
              src="https://res.cloudinary.com/dnp7nm4iy/image/upload/c_scale,w_140/v1680351132/Nummer_tnfkjk.png"
              alt="Phone icon"
            />
          </div>
          <div className="contact-text">
            <h5 className="contact-title">Mobil:</h5>
            {location === "neuss" ? (
              <a href="phone:+4915141273622">015141273622</a>
            ) : (
              <a href="phone:+4917677154511">017677154511</a>
            )}
          </div>
        </div>
        <div className="contact_details-sub">
          <div className="contact-image">
            <img
              src="https://res.cloudinary.com/dnp7nm4iy/image/upload/c_scale,w_140/v1680351132/EMail_ag2jer.png"
              alt="Email icon"
            />
          </div>
          <div className="contact-text">
            <h5 className="contact-title">E-Mail:</h5>
            <a href="mailto:info@finesoundacademy.com">
              info@finesoundacademy.com
            </a>
          </div>
        </div>
      </div>
      <div className="information">
        <div className="contact_whatsapp">
          <a
            href="https://www.axinio.app/booking/forms/trial/fc60f65c-2a6f-49dd-8809-c41246cca534/"
            class="formular"
            aria-label="Kontaktformular link"
          >
            ZUM KONTAKTFORMULAR
          </a>

          <a
            className="whatsapp"
            href={
              location === "neuss"
                ? "https://api.whatsapp.com/send?phone=4915141273622"
                : " https://api.whatsapp.com/send?phone=4917677154511"
            }
            aria-label="Whatsapp"
          >
            <div>
              <BsWhatsapp />
              <div className="wp_text">
                <p style={{ fontFamily: "Maytra", fontSize: "3rem" }}>
                  Schreibe uns bei
                </p>
                <p>WHATSAPP</p>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default MapSquare;
