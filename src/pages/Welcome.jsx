import React from "react";
import { NavLink } from "react-router-dom";
import "./Welcome.css";
const Welcome = ({ setLocation }) => {
  return (
    <div className="welcome">
      <h1>Wilkommen bei der Fine Sound Academy</h1>
      <div>
        <h3>Wählen Sie den Standort</h3>
        <div className="location">
          <NavLink
            to="/home"
            className="location_option"
            onClick={() => {
              setLocation("Düsseldorf");
            }}
          >
            Düsseldorf
          </NavLink>
          <NavLink
            to="/home"
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
  );
};

export default Welcome;
