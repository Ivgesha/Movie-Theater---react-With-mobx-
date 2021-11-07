import { useState } from "react";
const ChildNameComp = (props) => {
  // const [names, setNames] = useState();
  console.log(props);

  // setNames(...names, props.name);

  // const loadNames = props.name;

  return (
    <div>
      <span>Names</span>
      {<ul></ul>}
      <br />
    </div>
  );
};

export default ChildNameComp;
