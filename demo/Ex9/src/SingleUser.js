import { useEffect, useState } from "react";
const SingleUser = (props) => {
  const [id, setId] = useState();
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [city, setCity] = useState();

  useEffect(() => {
    const { id, name, email, city } = props.match.params;
    setId(id);
    setName(name);
    setEmail(email);
    setCity(city);
  }, []);

  return (
    <div>
      <h1>User ID: {id}</h1>
      <h2>Name: </h2>
      <label>{name}</label>
      <h2>Email: </h2>
      <label>{email}</label>
      <h2>City: </h2>
      <label>{city}</label>
    </div>
  );
};

export default SingleUser;
