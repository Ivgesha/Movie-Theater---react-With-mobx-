import "./App.css";
import { useState } from "react";

function App() {
  const [isRed, setRed] = useState(false);

  const toggleColorEventHandler = () => {
    setRed(!isRed);
  };

  const color = isRed == true ? "redColor" : "blueColor";

  return (
    <div className="App">
      <h1>Header!</h1>
      <button onClick={toggleColorEventHandler}>Toggle color</button>
      <br />
      <br />
      <label className={color}>Color</label>
    </div>
  );
}

export default App;
