import React, { useEffect, useState } from "react";

import { IoLogoInstagram, IoLogoFacebook, IoLogoYoutube } from "react-icons/io";

import { Image } from "cloudinary-react";
import "../UI/Title.css";
import { CSSTransition } from "react-transition-group";

const Title = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const firstBanner =
    "https://res.cloudinary.com/dnp7nm4iy/image/upload/v1680344932/IMG_6805_ucreeh.jpg";
  const secondBanner =
    "https://res.cloudinary.com/dnp7nm4iy/image/upload/v1680344931/IMG_6823_fs6htw.jpg";
  const thirdBanner =
    "https://res.cloudinary.com/dnp7nm4iy/image/upload/v1680344929/IMG_6822_rczjkp.jpg";
  const fourthBanner =
    "https://res.cloudinary.com/dnp7nm4iy/image/upload/v1680344929/IMG_6824_axnybo.jpg";
  const fifthBanner =
    "https://res.cloudinary.com/dnp7nm4iy/image/upload/v1680344929/IMG_6827_z7c1t4.jpg";
  const images = [
    firstBanner,
    secondBanner,
    thirdBanner,
    fourthBanner,
    fifthBanner,
  ];
  const changeImage = () => {
    setCurrentImageIndex((currentImageIndex + 1) % images.length);
  };
  useEffect(() => {
    const interval = setInterval(changeImage, 2000);
    return () => clearInterval(interval);
  }, [currentImageIndex, changeImage]);
  return (
    <section className="intro">
      <div className="intro_text-container">
        <div className="info_text">
          <div className="intro_infos">
            <div className="intro_logo">
              <img
                src="https://res.cloudinary.com/dnp7nm4iy/image/upload/q_auto,f_auto/v1680344909/Logo_fppvkk.png"
                srcset="
        https://res.cloudinary.com/dnp7nm4iy/image/upload/w_256,q_auto,f_auto/v1680344909/Logo_fppvkk.png 256w,
        https://res.cloudinary.com/dnp7nm4iy/image/upload/w_660,q_auto,f_auto/v1680344909/Logo_fppvkk.png 660w,
        https://res.cloudinary.com/dnp7nm4iy/image/upload/w_1040,q_auto,f_auto/v1680344909/Logo_fppvkk.png 1040w,
        https://res.cloudinary.com/dnp7nm4iy/image/upload/w_1320,q_auto,f_auto/v1680344909/Logo_fppvkk.png 1320w
    "
                sizes="(min-width: 2040px) 22.08vw, (min-width: 940px) 31.48vw, 70vw"
                alt="Fine sound academy logo"
              />
            </div>
          </div>
          <div className="intro_titles">
            <p style={{ fontSize: "2rem" }}>
              Musikunterricht in Neuss und Düsseldorf. Du möchtest ein
              Instrument lernen? Wir unterstützen dich gerne dabei.
            </p>
            <a
              href="https://www.axinio.app/booking/forms/trial/fc60f65c-2a6f-49dd-8809-c41246cca534/"
              aria-label="Buchen Sie jetzt Ihre kostenlose Probestunde"
            >
              KOSTENLOSE PROBESTUNDE
            </a>
          </div>
          <div className="intro_social">
            <a href="#" className="social_links" aria-label="Instagram Link">
              <IoLogoInstagram />
            </a>
            <a href="#" className="social_links" aria-label="Facebook Link">
              <IoLogoFacebook />
            </a>
            <a
              href="https://www.youtube.com/@modernmusicschoolneuss2615"
              className="social_links"
              aria-label="Youtube Link"
            >
              <IoLogoYoutube />
            </a>
          </div>
        </div>
      </div>
      <div className="intro_image">
        <span className="image_shadows top_shadow"></span>
        <span className="image_shadows left_shadow"></span>
        <span className="image_shadows bottom_shadow"></span>
        <div className="image_shadows right_shadow"></div>
        <CSSTransition
          key={currentImageIndex}
          timeout={2000}
          classNames="fade"
          in={true}
          appear={true}
        >
          <Image
            alt="Banner Images"
            style={{
              height: "100%",
              width: "100%",
              objectFit: "cover",
              objectPosition: "center",
            }}
            crop="scale"
            quality="auto"
            responsive
            publicId={images[currentImageIndex]}
            breakpoints={[
              {
                width: 300,
                transformation: {
                  width: 300,
                  crop: "fill",
                },
              },
              {
                width: 830,
                transformation: {
                  width: 830,
                  crop: "fill",
                },
              },
              {
                width: 1130,
                transformation: {
                  width: 1130,
                  crop: "fill",
                },
              },
              {
                width: 1500,
                transformation: {
                  width: 1500,
                  crop: "fill",
                },
              },
              {
                width: 1800,
                transformation: {
                  width: 1800,
                  crop: "fill",
                },
              },
              {
                width: 2048,
                transformation: {
                  width: 2048,
                  crop: "fill",
                },
              },
            ]}
          />
        </CSSTransition>
      </div>
    </section>
  );
};

export default Title;
