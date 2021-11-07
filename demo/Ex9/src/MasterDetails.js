import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const MasterDetails = () => {
  const url = "https://jsonplaceholder.typicode.com/users";
  const [users, setUsers] = useState([]);

  useEffect(() => {
    (async () => {
      const res = await axios.get(url);
      setUsers(res.data);
    })();
  }, []);

  return (
    <div>
      {users.map((singleUser) => {
        return (
          <div key={singleUser.id}>
            <Link
              to={`/singleUser/${singleUser.id}/${singleUser.name}/${singleUser.email}/${singleUser.address.city}`}
            >
              {singleUser.name}
            </Link>
            <br />
          </div>
        );
      })}
    </div>
  );
};

export default MasterDetails;
