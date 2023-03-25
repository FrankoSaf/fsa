import React from "react";
import { reviewers } from "../../assets/reviewers";
import { AiFillStar } from "react-icons/ai";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { EffectCoverflow, Pagination, Navigation } from "swiper";
import "./Reviewers.css";

const Reviewers = () => {
  const middleIndex = Math.floor(reviewers.length / 2); // calculate index of middle element
  return (
    <Swiper
      initialSlide={middleIndex} // set initial slide to middle index
      effect={"coverflow"}
      grabCursor={true}
      centeredSlides={true}
      slidesPerView={"auto"}
      coverflowEffect={{
        rotate: 0,
        stretch: 0,
        depth: 100,
        modifier: 2.5,
      }}
      pagination={{ el: ".swiper-pagination", clickable: true }}
      navigation={{
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
        clickable: true,
      }}
      modules={[EffectCoverflow, Pagination, Navigation]}
      className="swiper_container"
    >
      {reviewers.map((reviewer, index) => (
        <SwiperSlide key={index}>
          <h5 className="reviewer_initals">{reviewer.initials}</h5>
          <p>
            {<AiFillStar className="stars" />}
            {<AiFillStar className="stars" />}
            {<AiFillStar className="stars" />}
            {<AiFillStar className="stars" />}
            {<AiFillStar className="stars" />}
          </p>
          <p className="reviewer_text">{reviewer.review}</p>
        </SwiperSlide>
      ))}
      {/* <div className="slider-controler">
        <div className="swiper-button-prev slider-arrow">
          <ion-icon name="arrow-back-outline"></ion-icon>
        </div>
        <div className="swiper-button-next slider-arrow">
          <ion-icon name="arrow-forward-outline"></ion-icon>
        </div>
        <div className="swiper-pagination"></div>
      </div> */}
    </Swiper>
  );
};

export default Reviewers;
