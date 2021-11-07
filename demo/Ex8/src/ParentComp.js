import ChildComp from "./ChildComp.js";
import { useState } from "react";
import axios from "axios";
const ParentComp = () => {
  const url = "https://jsonplaceholder.typicode.com/todos";
  const [todosList, setTodosList] = useState([]);

  const inputHandler = async (event) => {
    const res = await axios.get(`${url}?userId=${event.target.value}`);
    const fiveOfAKind = res.data.splice(0, 5);
    setTodosList(fiveOfAKind);
    console.log(todosList);
  };
  return (
    <div>
      Movies
      <br />
      <input type="text" placeholder="User id" onChange={inputHandler} />
      <ChildComp todos={todosList} />
    </div>
  );
};

export default ParentComp;
