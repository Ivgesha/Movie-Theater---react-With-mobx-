import UserComp from "./UserComp.js";
import { useState } from "react";
import { getAll } from "./utils.js";
const UsersComp = () => {
  const usersUrl = "https://jsonplaceholder.typicode.com/users";
  const [users, setUsers] = useState([]);

  const getUsersEventHandler = async () => {
    const res = await getAll(usersUrl);
    console.log(res.data);
    setUsers(res.data);
  };
  return (
    <div>
      <span>
        <strong>Users</strong>
        <button onClick={getUsersEventHandler}>Get Users</button>
        {users.map((singleUser, index) => {
          return <UserComp key={index} user={singleUser} />;
        })}
      </span>
    </div>
  );
};

export default UsersComp;
