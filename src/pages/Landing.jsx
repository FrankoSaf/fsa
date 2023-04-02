import React, { useState, useEffect } from "react";
import "./Landing.css";
import { useNavigate, useParams } from "react-router-dom";
import Map from "../components/Map/Map";
import Modal from "./Modal";
import Title from "../components/Title";
import Instruments from "../components/Instruments";
import Advantages from "../components/Advantages";
import Teachers from "../components/Teachers";
import Prices from "../components/Prices";
import Reviewers from "../components/Reviewers/Reviewers";
import Footer from "../components/Footer";
import Probe from "../components/Probe";

const Landing = () => {
  const { location } = useParams();
  const navigate = useNavigate();
  const [loc, setLoc] = useState();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Set isMobile state on initial load
    setIsMobile(window.innerWidth < 769);

    // Add event listener to update isMobile state on resize
    const handleResize = () => {
      setIsMobile(window.innerWidth < 769);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  console.log(loc);
  useEffect(() => {
    // Add the class to the body element when the modal is shown
    if (location) {
      if (location.toLowerCase() === "neuss") {
        setLoc((prevLoc) => ({
          ...prevLoc,

          lat: 51.20087646292661,
          lng: 6.690204101221807,
          center: isMobile
            ? { lat: 51.20087646292661, lng: 6.690204101221807 }
            : { lat: 51.200980593252886, lng: 6.692039305347324 },
        }));
      } else if (location.toLowerCase() === "düsseldorf") {
        setLoc((prevLoc) => ({
          ...prevLoc,
          lat: 51.23393353212118,
          lng: 6.779056499334493,
          center: isMobile
            ? { lat: 51.23393353212118, lng: 6.779056499334493 }
            : { lat: 51.2339771976457, lng: 6.779968450415539 },
        }));
      } else {
        navigate("/");
      }
    }
    if (!location && !loc) {
      document.body.style.overflow = "hidden";
      document.documentElement.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
      document.documentElement.style.overflow = "auto";
    }
  }, [location, window.innerWidth]);
  return (
    <>
      {!location && !loc && <Modal setLocation={setLoc} />}
      <main style={{ width: "100%" }}>
        <Title />
        <Instruments />
        <Advantages />
        <Teachers />
        <Probe />
        <Prices />
        {/* <Reviewers /> */}
        {loc && <Map location={loc} />}
      </main>
    </>
  );
};

export default Landing;
