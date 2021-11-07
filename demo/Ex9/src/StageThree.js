import { useState } from "react";
import { useHistory, useParams } from "react-router-dom";
const StageThree = () => {
  const [selected, setSelected] = useState("Ashdod");
  const history = useHistory();
  const { firstName, lastName } = useParams();

  const clickHandler = () => {
    history.push(`/StageFour/${firstName}/${lastName}/${selected}`);
  };
  const selectedOption = (e) => {
    setSelected(e.target.value);
  };
  return (
    <div>
      <select onChange={selectedOption}>
        <option>Ashdod</option>
        <option>Haifa</option>
        <option>Beer Sheva</option>
      </select>
      <button onClick={clickHandler}>Next</button>
    </div>
  );
};

export default StageThree;
