import { useState, useEffect } from "react";

import styles from "./CourseForm.module.css";
import Input from "../form/Input";
import Select from "../form/Select";
import SubmitButton from "../form/SubmitButton";

function CourseForm({ handleSubmit, btnText, courseData }) {
  const [time, setTime] = useState([]); //array vazio esperando resposta da api
  const [day, setDay] = useState([]); //opa
  const [person, setPerson] = useState([]); //OPAAAAAAAAAAAAAAAAAAAAAAAAAAA
  const [course, setCourse] = useState(courseData || {});

  //---------------------------------------------------------------------------------------------//

  useEffect(() => {
    fetch("http://localhost:5000/time", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((resp) => resp.json()) // transforma em json, retorno implícito
      .then((data) => {
        setTime(data);
      })
      .catch((err) => console.log(err));
  }, []); // espera um valor inicial, que é as options vazias

  //---------------------------------------------------------------------------------------------//
  useEffect(() => {
    fetch("http://localhost:5000/day", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((resp) => resp.json()) // transforma em json, retorno implícito
      .then((data) => {
        setDay(data);
      })
      .catch((err) => console.log(err));
  }, []); // espera um valor inicial, que é as options vazias

  //---------------------------------------------------------------------------------------------//
  useEffect(() => {
    fetch("http://localhost:5000/person", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((resp) => resp.json()) // transforma em json, retorno implícito
      .then((data) => {
        setPerson(data);
      })
      .catch((err) => console.log(err));
  }, []); // espera um valor inicial, que é as options vazias

  //---------------------------------------------------------------------------------------------//

  const submit = (e) => {
    e.preventDefault();
    //console.log(course);
    handleSubmit(course);
  };

  function handleChange(e) {
    setCourse({ ...course, [e.target.name]: e.target.value }); // pega a barra type text
  }

  function handleTimeCourse(e) {
    // pega a barra select
    setCourse({
      ...course,
      time: {
        id: e.target.value,
        name: e.target.options[e.target.selectedIndex].text,
      },
    });
  }
  function handleDayCourse(e) {
    setCourse({
      ...course,
      day: {
        id: e.target.value,
        name: e.target.options[e.target.selectedIndex].text,
      },
    });
  }

  function handlePersonCourse(e) {
    // setCourse ({ 
    //    ...course.typeOfPerson.name === 'Instructor'? 
    //    person: {
    //       id: e.target.value,
    //     name: e.target.options[e.target.selectedIndex].text,

    //----------------------------------------------------------- correto embaixo
    setCourse({
      
      ...course,
     person: {
        id: e.target.value,
      name: e.target.options[e.target.selectedIndex].text,
//----------------------------------------------------------- correto em cima
      // value={course.person ? course.person.id : ""}
      },
    });
  }

  //---------------------------------------------------------------------------------------------//

  return (
    <form onSubmit={submit} className={styles.form}>
      <Input
        type="text"
        text="Course"
        name="courseName"
        placeholder="Put the name here..."
        handleOnChange={handleChange}
        value={course.courseName ? course.courseName : ""}
      />
      <Input
        type="number"
        text="Duration (semesters)"
        name="duration"
        placeholder="How many semesters?"
        handleOnChange={handleChange}
        value={course.duration ? course.duration : ""}
      />

      <div>
        <Select
          name="dayName"
          text="What day(s)"
          options={day}
          handleOnChange={handleDayCourse}
          value={course.day ? course.day.id : ""}
        />
      </div>
      <div>
        <Select
          name="timeName"
          text="What time"
          options={time}
          handleOnChange={handleTimeCourse}
          value={course.time ? course.time.id : ""}
        />
      </div>
      <div>
        <Select
          name="instructorName"
          text="Instructor"
          options={person}
          handleOnChange={handlePersonCourse}
          value={course.person ? course.person.id : ""}
        />
      </div>

      <SubmitButton text={btnText} />
    </form>
  );
}

export default CourseForm;
