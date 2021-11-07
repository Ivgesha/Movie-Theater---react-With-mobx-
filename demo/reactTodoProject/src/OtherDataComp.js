import { useState, useEffect } from "react";
const OtherDataComp = (props) => {
  const [address, setAddress] = useState({ street: "", city: "", zipcode: "" });
  useEffect(() => {
    setAddress(props.address);
  }, []);

  const changeEventHandler = (e) => {
    let { name, value } = e.target;
    setAddress({ ...address, [name]: value });
    props.callback({ ...address, [name]: value });
  };

  return (
    <div
      style={{
        border: "2px solid black",
        borderRadius: "8px",
        padding: "8px",
        margin: "12px",
        backgroundColor: "#bababa",
      }}
    >
      <label>Street: </label>
      <input
        type="text"
        value={address.street}
        name="street"
        onChange={changeEventHandler}
      />
      <br />
      <label>City: </label>
      <input
        type="text"
        value={address.city}
        name="city"
        onChange={changeEventHandler}
      />
      <br />
      <label>Zip code: </label>
      <input
        type="text"
        value={address.zipcode}
        name="zipcode"
        onChange={changeEventHandler}
      />
      <br />
    </div>
  );
};

export default OtherDataComp;
