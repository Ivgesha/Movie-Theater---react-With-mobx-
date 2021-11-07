import ChildComp from "./ChildComp";
import { useState } from "react";
import { observer } from "mobx-react-lite";
const UserComp = ({ store }) => {
  const [person, setPerson] = useState();

  const changeEventHandler = (e) => {
    const { name, value } = e.target;
    setPerson({ ...person, [name]: value });
  };
  const addPerson = () => {
    store.addPerson({ ...person });
  };
  const updateData = () => {
    store.updatePerson({ ...person });
  };
  const deleteData = () => {
    store.deletePerson({ ...person });
  };

  return (
    <div style={{ border: "1px solid red", padding: "16px" }}>
      <label>ID: </label>
      <input type="number" name="id" onChange={changeEventHandler} />
      <br />
      <label>First name: </label>
      <input type="text" name="firstName" onChange={changeEventHandler} />
      <br />
      <label>Last name: </label>
      <input type="text" name="lastName" onChange={changeEventHandler} />
      <br />
      <label>age: </label>
      <input type="number" name="age" onChange={changeEventHandler} />
      <br />
      <button onClick={addPerson}>Add</button>
      <button onClick={updateData}>Update</button>
      <button onClick={deleteData}>Delete</button>
      <ChildComp store={store} />
    </div>
  );
};

export default observer(UserComp);
