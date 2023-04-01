import React from "react";
import { BsWhatsapp } from "react-icons/bs";

import "./map.css";
const MapSquare = () => {
  return (
    <div className="contact_square">
      <div className="contact_details">
        <div className="contact_details-sub">
          <div className="contact-image">
            <img
              src="https://res.cloudinary.com/dnp7nm4iy/image/upload/c_scale,w_140/v1680351132/Adresse_eewpng.png"
              alt=""
            />
          </div>
          <div className="contact-text">
            <h5 className="contact-title">Adresse:</h5>
            <p>Neumarkt 18</p>
            <p>41460 Neuss</p>
          </div>
        </div>
        <div className="contact_details-sub">
          <div className="contact-image">
            <img
              src="https://res.cloudinary.com/dnp7nm4iy/image/upload/c_scale,w_140/v1680351132/Nummer_tnfkjk.png"
              alt=""
            />
          </div>
          <div className="contact-text">
            <h5 className="contact-title">Mobil:</h5>
            <a href="phone:+4915141273622">015141273622</a>
          </div>
        </div>
        <div className="contact_details-sub">
          <div className="contact-image">
            <img
              src="https://res.cloudinary.com/dnp7nm4iy/image/upload/c_scale,w_140/v1680351132/EMail_ag2jer.png"
              alt=""
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
          >
            ZUM KONTAKTFORMULAR
          </a>

          <a
            className="whatsapp"
            href="https://api.whatsapp.com/send?phone=4917664209354"
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
