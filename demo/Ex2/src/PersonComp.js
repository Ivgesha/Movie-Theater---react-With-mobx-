import { useState } from "react";

const PersonComp = (props) => {
  const [name, setName] = useState(props.name);
  const [age, setAge] = useState(props.age);

  const swapEventHandler = () => {
    let tempVal;
    tempVal = name;
    setName(age);
    setAge(tempVal);
  };
  return (
    <div className="PersonComp">
      <span>Person's name: {name}</span>
      <br />
      <span>Person's age: {age}</span>
      <br />
      <button onClick={swapEventHandler}>Swap</button>
      <br />
      <br />
    </div>
  );
};

export default PersonComp;
