import React from "react";
import { NavLink } from "react-router-dom";
import "../UI/Footer.css";
const Footer = () => {
  return (
    <footer>
      <div className="footer_container">
        <NavLink to="/datenschutz">Datenschutz</NavLink>
        <NavLink to="/impressum">Impressum</NavLink>
        <a
          href="https://www.axinio.app/booking/forms/termination/ebc793bf-3f17-4c16-a315-e9b045bf954b/"
          aria-label="Vertragskündigung link"
        >
          Vertragskündigung
        </a>
      </div>
    </footer>
  );
};

export default Footer;
