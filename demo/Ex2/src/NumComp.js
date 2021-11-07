import { useState } from "react";
const NumComp = () => {
  const [number, setNumber] = useState(0);
  let value = 0;

  const addNumberEventHandler = (event) => {
    setNumber(Number(value) + number);
  };

  const changeEventHandler = (event) => {
    value = event.target.value;
  };
  return (
    <div>
      <input type="number" onChange={changeEventHandler} />
      <button onClick={addNumberEventHandler}>Add</button>
      <h1>{number}</h1>
    </div>
  );
};

export default NumComp;
