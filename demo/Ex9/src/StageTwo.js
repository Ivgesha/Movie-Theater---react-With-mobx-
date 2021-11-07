import { useState } from "react";
import { useHistory } from "react-router";

const StageTwo = () => {
  const [person, setPerson] = useState({ firstName: " ", lastName: " " });
  const history = useHistory();
  const submitHandler = (e) => {
    e.preventDefault();
    history.push(`/StageThree/${person.firstName}/${person.lastName}`);
    // go to stage 3
  };

  const changeHandler = (e) => {
    let { name, value } = e.target;
    setPerson({ ...person, [name]: value });
  };
  return (
    <div>
      <form onSubmit={submitHandler}>
        <input
          type="text"
          placeholder="First name"
          name="firstName"
          onChange={changeHandler}
        />
        <br />
        <input
          type="text"
          placeholder="Last name"
          name="lastName"
          onChange={changeHandler}
        />
        <br />
        <input type="submit" value="Next" />
      </form>
    </div>
  );
};

export default StageTwo;
