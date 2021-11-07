import { useState, useEffect } from "react";
import axios from "axios";
import UserComp from "./UserComp.js";

const UsersComp = (props) => {
  const usersUrl = "https://jsonplaceholder.typicode.com/users";

  const [localUsers, setLocalUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);

  useEffect(() => {
    (async () => {
      const res = await axios.get(usersUrl);
      setLocalUsers(res.data);
      setFilteredUsers(res.data);
    })();
  }, []);

  useEffect(() => {
    let afterFilter = localUsers.filter((singleUser) => {
      if (
        singleUser.name.indexOf(props.searchedValue) !== -1 ||
        singleUser.email.indexOf(props.searchedValue) !== -1
      ) {
        return singleUser;
      }
    });
    setFilteredUsers(afterFilter);
  }, [props.searchedValue]);

  return (
    <div>
      {filteredUsers?.map((singleUser) => {
        return <UserComp key={singleUser.id} singleUser={singleUser} />;
      })}
    </div>
  );
};

export default UsersComp;
