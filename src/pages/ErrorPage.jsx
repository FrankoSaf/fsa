import React from "react";
import { NavLink } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div>
      <h1>404 - Seite nicht gefunden</h1>
      <p>
        Es tut uns leid, aber die angeforderte Seite konnte nicht gefunden
        werden.
      </p>
      <NavLink to="/">Zurück zur Startseite</NavLink>
    </div>
  );
};

export default ErrorPage;
