import React from "react";
import "./Landing.css";
import { useState, useEffect } from "react";

import Map from "../components/Map/Map";

import useLocalStorage from "use-local-storage";
import Modal from "./Modal";

import Title from "../components/Title";
import Instruments from "../components/Instruments";
import Advantages from "../components/Advantages";
import Teachers from "../components/Teachers";
import Prices from "../components/Prices";
import Reviewers from "../components/Reviewers/Reviewers";
const Landing = () => {
  const [location, setLocation] = useLocalStorage("");

  const location1 = {
    center: { lat: 51.200934234153095, lng: 6.6902485237841995 },
    lat: 51.200934234153095,
    lng: 6.6902485237841995,
  };
  const location2 = {
    center: { lat: 51.23399538994627, lng: 6.779174357670855 },
    lat: 51.23399538994627,
    lng: 6.779174357670855,
  };
  return (
    <>
      <Title />
      <Instruments />
      <Advantages />
      <Teachers />
      <Prices />
      <Reviewers />
      <Map location={location1} setLocation={setLocation} />
    </>
  );
};

export default Landing;
