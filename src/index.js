import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter as Router } from "react-router-dom";
import { CloudinaryContext } from "cloudinary-react";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <CloudinaryContext
    cloudName="193296596711623"
    apiKey="dnp7nm4iy"
    apiSecret="c6JQQZikimwjFEo7AyFhnzpKiB8"
  >
    <Router>
      <App />
    </Router>
  </CloudinaryContext>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
