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
              to="/düsseldorf"
              onClick={() => {
                setLocation({
                  name: "düsseldorf",
                  center: { lat: 51.23399538994627, lng: 6.779174357670855 },
                  lat: 51.23399538994627,
                  lng: 6.779174357670855,
                });
              }}
            >
              Düsseldorf
            </NavLink>
            <NavLink
              className="location_option"
              to="/neuss"
              onClick={() => {
                setLocation({
                  name: "neuss",
                  center: { lat: 51.200934234153095, lng: 6.6902485237841995 },
                  lat: 51.200934234153095,
                  lng: 6.6902485237841995,
                });
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
