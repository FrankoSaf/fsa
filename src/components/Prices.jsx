import React from "react";
import EKG from "../assets/EKG.png";
import { prices } from "../assets/prices";
import "../UI/Prices.css";
const Prices = () => {
  return (
    <section className="prices">
      <div class="title_deco">
        <div className="deco_cont">
          <img src={EKG} alt="title decoration" />
        </div>
        <h2>PREISE</h2>
      </div>
      <div className="price_list">
        <div className="price_list-container">
          {prices.map((price) => {
            return (
              <div
                className="price-card"
                style={{
                  background: `linear-gradient(to right,rgba(0, 0, 0, 0.596),rgba(0, 0, 0, 0.397),rgba(0, 0, 0, 0.171)),url(${price.image}) no-repeat center/cover`,
                }}
              >
                <h4 className="price-name">{price.name}</h4>
                <p className="price-desc">{price.description}</p>
                <ul className="price-details">
                  {price.list.map((item) => (
                    <li>
                      <p className="price-details-sub">{item}</p>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Prices;
