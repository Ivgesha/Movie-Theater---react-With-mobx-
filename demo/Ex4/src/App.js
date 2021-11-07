import "./App.css";
// import ExOneComp from "./ExOneComp.js";
// import ExTwoComp from "./ExTwoComp.js";
// import ExThreeComp from "./ExThreeComp.js";
// import ExFourComp from "./ExFourComp.js";
import ExFiveComp from "./ExFiveComp.js";

function App() {
  const people = [
    { name: "Dana", age: "20", city: "Haifa" },
    { name: "Ron", age: "22", city: "Tel Aviv" },
    { name: "Dov", age: "31", city: "Ashdod" },
    { name: "Vered", age: "19", city: "Eilat" },
  ];

  return (
    <div className="App">
      {/* <ExOneComp /> */}
      {/* <ExTwoComp /> */}
      {/* <ExThreeComp /> */}
      {/* <ExFourComp people={people} /> */}
      <ExFiveComp />
    </div>
  );
}

export default App;
