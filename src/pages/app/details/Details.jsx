import React from "react";
import style from "./Details.module.css";
import coursesData from "../../../data/courses.json";
//Third task: import useParams hook
import { useParams } from "react-router-dom";

function Details() {
  const { courseId } = useParams();
  const course=coursesData.find((course)=>course.id===courseId);

  return (
    <div className={style.courses_container}>
      <div className={style.card_container}>
        <div className={style.card_image}>
          <div className={style.image_container}>
            {/*Third task: image source here */}
            <img src={course.img} alt="icons" />
          </div>
        </div>
        <div className={style.card_content}>
          {/*Third Task:  Title and Description here */}
          <h1 className={style.card_title}>{course.title}</h1>
          <p className={style.card_description}>{course.desc}</p>
        </div>
      </div>
      {/* Task4: create Link to the Learn Page */}
      <button className={style.button}>Start Learning</button>
    </div>
  );
}

export default Details;
