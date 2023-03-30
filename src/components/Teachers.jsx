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
              <img
                src={teacher.image}
                alt=""
                style={index === 3 ? { objectPosition: "top left" } : {}}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Teachers;
