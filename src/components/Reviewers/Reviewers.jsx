// import React, { useState, useEffect } from "react";
// import { reviewers } from "../../assets/reviewers";
// import { AiFillStar } from "react-icons/ai";
// import { HiArrowRight, HiArrowLeft } from "react-icons/hi";
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "swiper/css/effect-coverflow";
// import "swiper/css/pagination";
// import "swiper/css/navigation";
// import { EffectCoverflow, Pagination, Navigation } from "swiper";
// import "./Reviewers.css";
// import EKG from "../../assets/EKG.png";
// const Reviewers = () => {
//   const [slidesPerView, setSlidesPerView] = useState(3);
//   const middleIndex = Math.floor(reviewers.length / 2);

//   useEffect(() => {
//     // detect screen width
//     const screenWidth = window.innerWidth;

//     // set slidesPerView based on screen width
//     if (screenWidth >= 768) {
//       setSlidesPerView(3);
//     } else {
//       setSlidesPerView(1);
//     }

//     // add event listener for screen resize
//     window.addEventListener("resize", handleResize);

//     return () => {
//       // remove event listener on unmount
//       window.removeEventListener("resize", handleResize);
//     };
//   }, []);
//   const handleResize = () => {
//     // detect screen width on resize and set slidesPerView accordingly
//     const screenWidth = window.innerWidth;

//     if (screenWidth >= 768) {
//       setSlidesPerView(3);
//     } else {
//       setSlidesPerView(1);
//     }
//   };
//   return (
//     <section className="reviewers-section">
//       <div class="title_deco">
//         <div className="deco_cont">
//           <img src={EKG} alt="title decoration" />
//         </div>
//         <h2>BEWERTUNGEN</h2>
//       </div>
//       <Swiper
//         initialSlide={middleIndex} // set initial slide to middle index
//         effect={"coverflow"}
//         grabCursor={true}
//         centeredSlides={true}
//         slidesPerView={slidesPerView}
//         coverflowEffect={{
//           rotate: 0,
//           stretch: 0,
//           depth: 100,
//           modifier: 2.5,
//         }}
//         pagination={{ el: ".swiper-pagination", clickable: true }}
//         navigation={{
//           nextEl: ".swiper-ekg-next",
//           prevEl: ".swiper-ekg-prev",
//           clickable: true,
//         }}
//         modules={[EffectCoverflow, Pagination, Navigation]}
//         className="swiper_container"
//       >
//         {reviewers.map((reviewer, index) => (
//           <SwiperSlide key={index}>
//             <h5 className="reviewer_initals">{reviewer.initials}</h5>
//             <p>
//               {<AiFillStar className="stars" />}
//               {<AiFillStar className="stars" />}
//               {<AiFillStar className="stars" />}
//               {<AiFillStar className="stars" />}
//               {<AiFillStar className="stars" />}
//             </p>
//             <p className="reviewer_text">{reviewer.review}</p>
//           </SwiperSlide>
//         ))}
//         <div className="slider-controller ">
//           <div className="change swiper-ekg-prev">
//             <HiArrowLeft />
//             <span>Vorherige</span>
//           </div>
//           <div className="change swiper-ekg-next">
//             <span>Nächste</span>
//             <HiArrowRight />
//           </div>
//         </div>
//       </Swiper>
//     </section>
//   );
// };

// export default Reviewers;
