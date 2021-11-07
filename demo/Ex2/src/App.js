import PersonComp from "./PersonComp.js";
import NumComp from "./NumComp.js";
import "./App.css";

function App() {
  return (
    <div className="App">
      <PersonComp name="Evgeni" age="28" />
      <NumComp />
    </div>
  );
}

export default App;
