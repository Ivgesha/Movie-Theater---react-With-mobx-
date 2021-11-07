import "./App.css";
import Movies from "./Movies";
import ParentComp from "./ParentComp.js";

function App() {
  return (
    <div className="App">
      <ParentComp />
      <Movies />
    </div>
  );
}

export default App;
