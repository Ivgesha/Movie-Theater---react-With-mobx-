import { useState } from "react";
import ChildNameComp from "./ChildNameComp";

const ParentExtraComp = () => {
  const [persons, setPersons] = useState([]);
  const [person, setPerson] = useState();

  const onChange = (event) => {
    const { name, value } = event.target;
    console.log(`name: ${name}`);
    console.log(`value: ${value}`);

    setPerson({ ...person, [name]: value }); // good!

    // setPerson({ [name]: value });    // not good !
    console.log(person);
  };

  const addNameAndAge = (event) => {
    console.log(`Sngle Person: ${person}`);
    console.log(person);
    console.log(`All Persons: ${persons}`);
    console.log(persons);
    setPersons([...persons, person]);
  };

  return (
    <div>
      <label>
        Name: <input type="text" name="name" onChange={onChange} />
      </label>
      <br />
      <label>
        Age: <input type="number" name="age" onChange={onChange} />
      </label>
      <br />
      <button onClick={addNameAndAge}>Add</button>
      {/* <ChildNameComp personList={person} /> */}
    </div>
  );
};

export default ParentExtraComp;
