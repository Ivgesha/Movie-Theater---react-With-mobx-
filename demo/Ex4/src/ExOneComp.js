import { useState } from "react";
const ExOneComp = () => {
  const [isBlue, setBlue] = useState(true);

  const onChangeEventHandler = (event) => {
    let valLength = event.target.value.length;
    if (valLength >= 5) {
      setBlue(true);
    } else {
      setBlue(false);
    }
  };

  const color = isBlue === true ? "blueBackground" : "redBackground";
  console.log(color);
  return (
    <div>
      <div className={color}>
        <input className="" onChange={onChangeEventHandler} type="text" />
      </div>
    </div>
  );
};

export default ExOneComp;
