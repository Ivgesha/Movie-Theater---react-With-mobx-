import { useState } from "react";
const ExFiveComp = (props) => {
  const [isRed, setRed] = useState(false);
  const [isGreen, setGreen] = useState(false);
  const [isBlue, setBlue] = useState(false);

  const redOnChangeListener = (event) => {
    console.log("red changed");
    console.log(event.target.checked);
    setRed(event.target.checked);
  };
  const greenOnChangeListener = (event) => {
    console.log("green changed");
    console.log(event.target.checked);
    setGreen(event.target.checked);
  };
  const blueOnChangeListener = (event) => {
    console.log("blue changed");
    console.log(event.target.checked);
    setBlue(event.target.checked);
  };

  const loadLi = (
    <ul>
      {isRed === true ? <li>RED</li> : ""}
      {isGreen === true ? <li>GREEN</li> : ""}
      {isBlue === true ? <li>BLUE</li> : ""}
    </ul>
  );

  console.log(props.people);
  return (
    <div>
      RED
      <input type="checkbox" onChange={redOnChangeListener} />
      GREEN
      <input type="checkbox" onChange={greenOnChangeListener} />
      BLUE
      <input type="checkbox" onChange={blueOnChangeListener} />
      <br />
      {loadLi}
    </div>
  );
};

export default ExFiveComp;
