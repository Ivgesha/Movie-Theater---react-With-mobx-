import UserComp from "./UserComp.js";
import PersonCollection from "./PersonCollection.js";
import "./App.css";

function App() {
  const personCollection = new PersonCollection();
  return (
    <div className="App">
      <UserComp store={personCollection} />
    </div>
  );
}

export default App;
