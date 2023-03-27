import React from "react";
import EKG from "../assets/EKG.png";
const Prices = () => {
  return (
    <section className="prices">
      <div class="title_deco">
        <div className="deco_cont">
          <img src={EKG} alt="title decoration" />
        </div>
        <h2>PREISE</h2>
      </div>
    </section>
  );
};

export default Prices;
