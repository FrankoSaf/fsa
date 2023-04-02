import React from "react";
import EKG from "../assets/EKG.png";
import { prices } from "../assets/prices";
import { BsCheckCircleFill } from "react-icons/bs";
import "../UI/Prices.css";
import { AnimationOnScroll } from "react-animation-on-scroll";
import "animate.css/animate.min.css";
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
          {prices.map((price, index) => {
            return (
              <AnimationOnScroll
                animateIn={` animate__fadeInRight animate__delay-${1 * index}s`}
              >
                <div
                  className="price-card"
                  style={{
                    background: `linear-gradient(to right,rgba(0, 0, 0, 0.596),rgba(0, 0, 0, 0.397),rgba(0, 0, 0, 0.171)),url(${price.image}) no-repeat center/cover`,
                  }}
                >
                  <h4 className="price-name">
                    <span>{price.name.split(" ")[0]}</span> <br />
                    {price.name.split(" ")[1]} {price.name.split(" ")[2]}
                  </h4>
                  <p className="price-desc">{price.description}</p>
                  <ul className="price-details">
                    {price.list.map((item) => (
                      <li>
                        <BsCheckCircleFill />
                        <p className="price-details-sub">{item}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              </AnimationOnScroll>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Prices;
