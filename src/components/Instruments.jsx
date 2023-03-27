import React from "react";
import { instrumentsList } from "../assets/instrumentList";
import EKG from "../assets/EKG.png";
import "../UI/Instruments.css";
const Instruments = () => {
  return (
    <section>
      <div class="title_deco">
        <div className="deco_cont">
          <img src={EKG} alt="title decoration" />
        </div>
        <h2>DAS UNTERRICHTEN WIR</h2>
      </div>
      <div className="instruments_container">
        <div className="instruments_list">
          {instrumentsList.map((instrument, index) => (
            <>
              <div className="instrument_cont">
                <img src={instrument.image} alt={instrument.inName} />{" "}
                <p>Lorem ipsum dolor</p>
              </div>
            </>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Instruments;
