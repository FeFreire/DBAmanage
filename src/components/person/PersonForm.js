import styles from "./PersonForm.module.css";
import Input from "../form/Input";
import Select from "../form/Select";
import SubmitButton from "../form/SubmitButton";

import { useState, useEffect } from "react";

function PersonForm({ handleSubmit, btnText, personData }) {
  const [typePerson, setTypePerson] = useState([]);
  const [person, setPerson] = useState(personData || {});
  //---------------------------------------------------------------------------------------------//

  useEffect(() => {
    fetch("http://localhost:5000/typeOfPerson", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((resp) => resp.json()) // transforma em json, retorno implícito
      .then((data) => {
        setTypePerson(data);
      })
      .catch((err) => console.log(err));
  }, []); // espera um valor inicial, que é as options vazias

  //---------------------------------------------------------------------------------------------//

  const submit = (e) => {
    e.preventDefault();
    console.log(person)
    handleSubmit(person);
  };

  function handleChange(e) {
    setPerson({ ...person, [e.target.name]: e.target.value }); // pega a barra type
  }

  function handleTypePerson(e) { // pega a barra select
    setPerson({
      ...person,
      typeOfPerson: {
        id: e.target.value,
        name: e.target.options[e.target.selectedIndex].text,
      },
    });
  }

  //---------------------------------------------------------------------------------------------//

  return (
    <form onSubmit={submit} className={styles.form}>
      <div>
        <Select
          name="typePersonID"
          text="Type"
          options={typePerson}
          handleOnChange={handleTypePerson}
          value={person.typeOfPerson ? person.typeOfPerson.id : ""} // para funcionar a lista de ítens. se tem, ok, se não manda um valor vazio
        />
      </div>
      <Input
        type="text"
        text="Name"
        name="personName"
        placeholder="Put the name here..."
        handleOnChange={handleChange}
        value={person.personName ? person.personName: '' }
      />
      <div>
        <Input
          type="number"
          text="personal ID"
          name="personalID"
          placeholder="Enter the ID"
          handleOnChange={handleChange}
          value={person.personalID ? person.personalID: ''}
        />
      </div>
      <SubmitButton text={btnText} />
    </form>
  );
}

export default PersonForm;
