import axios from "axios";
import { useState, useEffect } from "react";
import { useHistory } from "react-router";
import OtherDataComp from "./OtherDataComp.js";
const UserComp = (props) => {
  const usersUrl = "https://jsonplaceholder.typicode.com/users";
  const history = useHistory();
  const [singleUser, setSingleUser] = useState({ id: "", name: "", email: "" });
  const [address, setAddress] = useState({ street: "", city: "", zipcode: "" });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setSingleUser(props.singleUser);
    setAddress(props.singleUser.address);
  }, [props.singleUser]);
  const onChangeEventHandler = (e) => {
    let { name, value } = e.target;
    setSingleUser({ ...singleUser, [name]: value });
  };
  const otherDataEventHandler = () => {
    setIsVisible(true);
  };
  const closeOtherDataEventHandler = () => {
    setIsVisible(false);
  };
  const openMoreInfo = () => {
    let id = singleUser.id;
    history.push(`moreInfo/${id}`);
  };

  const updateEventHandler = async (e, id) => {
    let newUser = { ...singleUser, address: { ...address } };
    setSingleUser(newUser);
    const res = await axios.put(`${usersUrl}/${id}`, newUser);
    console.log(res.data);
  };
  const getAdress = (returnedParams) => {
    setAddress({ ...address, ...returnedParams });
  };

  const deleteUser = async (e, id) => {
    const res = await axios.delete(`${usersUrl}/${id}`);
    console.log(res.data);
  };
  return (
    <div
      style={{
        border: "1px solid green",
        margin: "15px",
        padding: "15px",
        width: "400px",
      }}
    >
      <label onClick={openMoreInfo}> ID: {singleUser.id} </label>
      <br />
      <label>Name:</label>
      <input
        type="text"
        name="name"
        value={singleUser.name}
        onChange={onChangeEventHandler}
      />
      <br />
      <label>Email:</label>
      <input
        type="text"
        name="email"
        value={singleUser.email}
        onChange={onChangeEventHandler}
      />
      <br />
      <button
        onMouseEnter={otherDataEventHandler}
        onClick={closeOtherDataEventHandler}
        style={{
          backgroundColor: "#bababa",
          borderRadius: "4px",
          fontSize: "16px",
          padding: "4px",
          marginTop: "8px",
          marginRight: "100px",
        }}
      >
        Other data
      </button>

      {isVisible && <OtherDataComp address={address} callback={getAdress} />}
      <button
        onClick={(e) => {
          updateEventHandler(e, singleUser.id);
        }}
        style={{
          backgroundColor: "orange",
          borderRadius: "4px",
          fontSize: "16px",
          padding: "4px",
          marginTop: "8px",
        }}
      >
        Update
      </button>
      <button
        onClick={(e) => {
          deleteUser(e, singleUser.id);
        }}
        style={{
          backgroundColor: "orange",
          borderRadius: "4px",
          fontSize: "16px",
          padding: "4px",
          marginTop: "8px",
        }}
      >
        Delete
      </button>
    </div>
  );
};

export default UserComp;
