import { useState } from "react";
import { getTaskById } from "./utils.js";

const UserComp = (props) => {
  const todosUrl = "https://jsonplaceholder.typicode.com/todos";
  const [user] = useState(props.user);
  const [tasks, setTasks] = useState([]);

  const getTasks = async () => {
    let res = await getTaskById(todosUrl, user.id);
    let threeOfAKind = res.data.splice(0, 3);
    setTasks(threeOfAKind);
  };
  const loadData = tasks.length > 0 && (
    <ul style={{ border: "1px solid black" }}>
      {tasks.map((singleTask, index) => {
        return <li key={index}>{singleTask.title}</li>;
      })}
    </ul>
  );
  return (
    <div style={{ border: "1px solid black" }}>
      <span>
        User ID: {user.id}
        <br />
        Name: {user.name}
        <br />
        Email: {user.email}
        <br />
        <button onClick={getTasks}>Tasks</button>
        {loadData}
      </span>
    </div>
  );
};

export default UserComp;
