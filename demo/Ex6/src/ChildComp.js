import { useState } from "react";

const ChildComp = (props) => {
  const [form, setForm] = useState();
  const [name, setName] = useState();
  const [age, setAge] = useState();
  const [city, setCity] = useState("Ashdod");
  const [adult, setAdult] = useState(false);

  const addClickedEventHandler = () => {
    let obj = { name: name, age: age, city: city, adult: adult };
    setForm(obj);
    props.callback(obj);
  };

  const nameOnChange = (event) => {
    setName(event.target.value);
  };
  const ageOnChange = (event) => {
    setAge(event.target.value);
  };
  const selectOnChange = (event) => {
    console.log(event.target.value);
    setCity(event.target.value);
  };
  const checkboxOnChage = (event) => {
    setAdult(event.target.checked);
  };

  return (
    <div>
      <label>
        Name: <input type="text" onChange={nameOnChange} />
      </label>
      <br />
      <label>
        Age: <input type="text" onChange={ageOnChange} />
      </label>
      <br />
      <label>
        City:
        <select onChange={selectOnChange}>
          <option value="Ashdod">Ashdod</option>
          <option value="Haifa">Haifa</option>
        </select>
      </label>
      <br />
      <label>
        Is Adult: <input type="checkbox" onChange={checkboxOnChage} />
      </label>
      <br />
      <button onClick={addClickedEventHandler}>Add</button>
    </div>
  );
};

export default ChildComp;
