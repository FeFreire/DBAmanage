import styles from "./Courses.module.css";
import Container from "../layout/Container";

import { useState, useEffect } from "react"; //useEffect pra ele não ficar carregando a api toda hora

import CourseCard from "../courses/CourseCard";

function Courses() {
  const [courses, setCourses] = useState([]); //aqui os cursos, precisa de um state para salvar os projectos
//-------------------------------------------------------------------------------------------------------------//
  useEffect(() => {
    fetch("http://localhost:5000/course", {
      method: "GET",
      headers: {
        "Content-type": "application/json",
      }, // como aqui é uma promise, pega os dados com o then
    })
      .then((resp) => resp.json()) //transforma a resposta em json
      .then((data) => {
        setCourses(data);
        console.log(data);
      })
      .catch((err) => console.log(err)); // caso dê um erro, apresentar o erro
  }, []); //controla uma array vazia que vai preencher após a função
//-------------------------------------------------------------------------------------------------------------//
  function removeCourse(id) {
    fetch(`http://localhost:5000/course/${id}`, {
      method: "DELETE",
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(resp => resp.json())
      .then(data => {
        setCourses(courses.filter((course) => course.id !== id))
        //message
      })
      .catch((err) => console.log(err))
  }
//-------------------------------------------------------------------------------------------------------------//

  return (
    <div className={styles.course_container}>
      <div className={styles.title_container}>
        <h1>Courses</h1>
      </div>

      {/* {message && <Message msg={message} type="success" />} */}
      <Container customClass="start">
        {courses.length > 0 &&
          courses.map((course) => (
            <CourseCard
              id={course.id}
              name={course.courseName}
              day={course.day.name}
              time={course.time.name}
              duration={course.duration}
              instructor={course.person.name}
              key={course.id}
              handleRemove={removeCourse}
            />
          ))}
      </Container>
    </div>
  );
}

export default Courses;
