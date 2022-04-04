import CourseForm from "../courses/CourseForm";
import styles from "./NewCourse.module.css";

import { useNavigate } from "react-router-dom";



function NewCourse() {
  const navigate = useNavigate();

  function createPost(course) {



    fetch("http://localhost:5000/course", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      }, // mandar dados para servidor
      body: JSON.stringify(course),
    })
      .then((resp) => resp.json())
      .then((data) => {
        console.log(data);
        //redirect
        navigate("/courses", { message: "Course added!" });
      })
      .catch((err) => console.log(err));



  }
  return (
    <div className={styles.newCourse_container}>
      <h1>Add Course</h1>
      <p>Create course and then add an instructor</p>
      <CourseForm handleSubmit={createPost} btnText="Create Course" />
    </div>
  );
}

export default NewCourse;
 