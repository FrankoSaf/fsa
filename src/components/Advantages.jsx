import React from "react";
import EKG from "../assets/EKG.png";
import "../UI/Advantages.css";
import Micro from "../assets/otherimages/microphone-780178.jpg";
const Advantages = () => {
  return (
    <section>
      <div class="title_deco">
        <div className="deco_cont">
          
          <img src={EKG} alt="title decoration" />
        </div>
        <h2>UNSERE VORTEILE</h2>
      </div>
      <div className="advantages">
        <div className="advantages_list-cont">
          <ul className="advantages_list">
            <li>
              <h3>LOCATION</h3>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Ducimus, ea.
              </p>
            </li>
            <li>
              <h3>FLEXIBLE</h3>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Ducimus, ea.
              </p>
            </li>
            <li>
              <h3>GOOD VALUE</h3>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Ducimus, ea.
              </p>
            </li>
            <li>
              <h3>CREATIVITY</h3>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Ducimus, ea.
              </p>
            </li>
          </ul>
        </div>
        <div className="advantages_image">
          <span className="image_shadows top_shadow"></span>
          <span className="image_shadows left_shadow"></span>
          <span className="image_shadows bottom_shadow"></span>
          <img src={Micro} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Advantages;
