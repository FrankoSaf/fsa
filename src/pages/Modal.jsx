import React from "react";
import { NavLink } from "react-router-dom";
import "./Modal.css";
const Welcome = ({ setLocation }) => {
  return (
    <div className="backdrop">
      <div className="modal">
        <h1>Willkommen bei der Fine Sound Academy</h1>
        <div>
          <h3>Wähle deinen Standort</h3>
          <div className="location">
            <NavLink
              className="location_option"
              onClick={() => {
                setLocation("Düsseldorf");
              }}
            >
              Düsseldorf
            </NavLink>
            <NavLink
              className="location_option"
              onClick={() => {
                setLocation("Neuss");
              }}
            >
              Neuss
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
