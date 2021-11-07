import { useState } from "react";
import ChildComp from "./ChildComp.js";

const ParentComp = () => {
  const [row, setRow] = useState([]);
  const messageFromChile = (mfc) => {
    setRow([...row, mfc]);
  };
  return (
    <div>
      <h1>Parent Component</h1>
      <ul>
        {row.map((singleRow, index) => {
          return (
            <li key={index}>{`${singleRow.name} is ${singleRow.age}, lives in ${
              singleRow.city
            } and He is ${singleRow.adult ? "" : "not"} an Adult`}</li>
          );
        })}
      </ul>
      <ChildComp callback={messageFromChile} />
    </div>
  );
};

export default ParentComp;
