import React from "react";
import "./Landing.css";
import logo from "../assets/images/Logo.png";
import "animate.css/animate.min.css";
import { AnimationOnScroll } from "react-animation-on-scroll";

import { BsCheckCircleFill } from "react-icons/bs";
import { useState, useEffect } from "react";
import bassBanner from "../assets/otherimages/bass-6024074.jpg";
import drumsBanner from "../assets/otherimages/drums-2599508.jpg";
import handsBanner from "../assets/otherimages/hands-1851500.jpg";

import Map from "../components/Map/Map";

import useLocalStorage from "use-local-storage";
import Modal from "./Modal";
import Reviewers from "../components/Reviewers/Reviewers";
import Title from "../components/Title";
import Instruments from "../components/Instruments";
import Advantages from "../components/Advantages";
import Teachers from "../components/Teachers";
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
    </>
  );
};

export default Landing;
