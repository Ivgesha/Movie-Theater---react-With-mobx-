import { useState } from "react";
import axios from "axios";

const ApiComp = () => {
  const url = "https://jsonplaceholder.typicode.com/users";
  const todosUrl = "https://jsonplaceholder.typicode.com/todos";
  const [id, setId] = useState();
  const [user, setUser] = useState({});
  const [todos, setTodos] = useState([]);

  const onChange = (event) => {
    setId(event.target.value);
  };
  const getData = async () => {
    const res = await axios.get(`${url}/${id}`);
    setTodos([]);
    if (res.data.name.startsWith("E")) {
      // getting all the todos.
      const todoRes = await axios.get(`${todosUrl}?userId=${id}`);
      console.log(todoRes.data);
      setTodos(todoRes.data);
    }
    setUser({ name: res.data.name, email: res.data.email });
  };

  const loadData = (
    <div>
      {user.name} <br /> {user.email}
      <br />
      <ul>
        {todos.map((singleTodo, index) => {
          return <li key={index}>{singleTodo.title}</li>;
        })}
      </ul>
    </div>
  );

  return (
    <div>
      <span>
        <input type="text" onChange={onChange} />
        <br />
        <button onClick={getData}>GET</button>
      </span>
      <br />
      {loadData}
    </div>
  );
};

export default ApiComp;
