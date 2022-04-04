// import { Link } from "react-router-dom";
// import LinkButton from "../layout/LinkButton";
// import savings from "../img/management.png"

import PersonForm from "../person/PersonForm";
import styles from "./Person.module.css";
import { useNavigate } from "react-router-dom";

function Person() {
  const navigate = useNavigate();

  function createPost(person) {
    //initialize duration and time

   
    person.dayAvailableAfternoon = [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
    ];
    person.dayAvailableMorning = [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
    ];

    fetch("http://localhost:5000/person", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      }, // mandar dados para servidor
      body: JSON.stringify(person),
    })
      .then((resp) => resp.json())
      .then((data) => {
        console.log(data);
        //redirect
        navigate("/"); // message: "Person added!" 
      })
      .catch((err) => console.log(err));
  }

  return (
    <div className={styles.person_container}>
      <h1>Add Person</h1>
      <p>Create an instructor or a student</p>
      <PersonForm handleSubmit={createPost} btnText="Create Person" />
    </div>
  );
}

export default Person;
