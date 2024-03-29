import React, { useEffect, useState } from "react";
import { IoLogoInstagram, IoLogoFacebook, IoLogoYoutube } from "react-icons/io";
import { Image } from "cloudinary-react";
import "../UI/Title.css";
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
const Title = () => {
  const [images, setImages] = useState([fifthBanner]);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 960) {
        setImages([fifthBanner]);
        setIsSmallScreen(true);
      } else {
        setImages([
          firstBanner,
          secondBanner,
          thirdBanner,
          fourthBanner,
          fifthBanner,
        ]);
        setIsSmallScreen(false);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
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
            <p style={{ fontSize: "2rem", fontFamily: "Dosis, sans-serif" }}>
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
            <a
              href="https://www.instagram.com/finesoundacademy/?igshid=YmMyMTA2M2Y%3D"
              className="social_links"
              aria-label="Instagram Link"
            >
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
      <div class="intro_image" id="cf4a">
        <span class="image_shadows top_shadow"></span>
        <span class="image_shadows left_shadow"></span>
        <span class="image_shadows bottom_shadow"></span>
        {isSmallScreen ? (
          <>
            <div className="grad_image"></div>
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
              publicId={images[0]}
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
          </>
        ) : (
          images.map((image, index) => {
            return (
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
                publicId={image}
                class={`image image-${index + 1}`}
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
            );
          })
        )}
      </div>
    </section>
  );
};

export default Title;
