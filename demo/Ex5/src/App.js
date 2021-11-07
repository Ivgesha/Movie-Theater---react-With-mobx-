import { useState } from "react";
import Persons from "./Persons.js";
import "./App.css";

function App() {
  // const persons = [
  //   { name: "Avi", tasks: { title: "task A", completed: false } },
  //   { name: "Noa", tasks: { title: "task B", completed: true } },
  //   { name: "Ron", tasks: { title: "task C", completed: false } },
  // ];

  const [persons] = useState([
    {
      name: "Avi",
      tasks: [
        { title: "task A", completed: "false" },
        { title: "task AA", completed: "true" },
      ],
    },
    { name: "Noa", tasks: [{ title: "task B", completed: "true" }] },
    { name: "Ron", tasks: [{ title: "task C", completed: "false" }] },
  ]);
  return (
    <div className="App">
      <Persons persons={persons} />
    </div>
  );
}

export default App;
