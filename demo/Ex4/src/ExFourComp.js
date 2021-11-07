import { useState } from "react";
const ExFourComp = (props) => {
  //   const people = [
  //     { name: "Dana", age: "20", city: "Haifa" },
  //     { name: "Ron", age: "22", city: "Tel Aviv" },
  //     { name: "Dov", age: "31", city: "Ashdod" },
  //     { name: "Vered", age: "19", city: "Eilat" },
  //   ];
  const [people, setPeople] = useState(props.people);
  const [name, setName] = useState();
  const [age, setAge] = useState();
  const [city, setCity] = useState();

  const loadTableData = people.map((person, index) => {
    return (
      <tr key={index}>
        <td>{person.name}</td>
        <td>{person.age}</td>
        <td>{person.city}</td>
      </tr>
    );
  });

  const addDataToTable = () => {
    let newObj = {
      name: name,
      age: age,
      city: city,
    };
    setPeople([...people, newObj]);
  };
  const getName = (event) => {
    setName(event.target.value);
  };
  const getAge = (event) => {
    setAge(event.target.value);
  };
  const getCity = (event) => {
    setCity(event.target.value);
  };

  return (
    <div>
      <input type="text" placeholder="name" onChange={getName} />
      <br />
      <input type="text" placeholder="age" onChange={getAge} />
      <br />
      <input type="text" placeholder="city" onChange={getCity} />
      <br />
      <button onClick={addDataToTable}>Add to table</button>

      <table border="1">
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>City</th>
          </tr>
        </thead>
        {loadTableData}
      </table>
    </div>
  );
};

export default ExFourComp;
