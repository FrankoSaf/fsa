import { Image } from "cloudinary-react";
import React from "react";
import EKG from "../assets/EKG.png";
import { teachers } from "../assets/teacher";
import "../UI/Teachers.css";
const Teachers = () => {
  return (
    <section className="teachers-section">
      <div class="title_deco">
        <div className="deco_cont">
          <img src={EKG} alt="title decoration" />
        </div>
        <h2>UNSER TEAM</h2>
      </div>
      <div className="teachers_container">
        {teachers.map((teacher, index) => (
          <div className="teacher">
            <div className="teacher_image">
              <Image
                publicId={teacher.image}
                alt={`${teacher.name}`}
                style={index === 3 ? { objectPosition: "top left" } : {}}
                responsive
                width="auto"
                dpr="auto"
                crop="scale"
                responsiveUseBreakpoints="true"
                responsiveTransformation={{
                  transformation: [
                    { width: 256, height: 256, crop: "fill" },
                    { width: 760, height: 760, crop: "fill" },
                    { width: 1070, height: 1070, crop: "fill" },
                    { width: 1320, height: 1320, crop: "fill" },
                    { width: 1520, height: 1520, crop: "fill" },
                  ],
                }}
                breakpoints={[
                  { width: 256, height: 256, dpr: "auto" },
                  { width: 760, height: 760, dpr: "auto" },
                  { width: 1070, height: 1070, dpr: "auto" },
                  { width: 1320, height: 1320, dpr: "auto" },
                  { width: 1520, height: 1520, dpr: "auto" },
                  { width: 3000, height: 4000, dpr: "auto" },
                ]}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Teachers;
