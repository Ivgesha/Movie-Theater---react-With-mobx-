import axios from "axios";
import { useState, useEffect } from "react";
import { useHistory } from "react-router";
import { observer } from "mobx-react-lite";

const Login = ({ store }) => {
  const userUrl = "http://jsonplaceholder.typicode.com/users";
  const history = useHistory();

  const moviesUrl = "http://api.tvmaze.com/shows";
  useEffect(() => {
    (async () => {
      const res = await axios.get(moviesUrl);
      store.setMovies(res.data.splice(0, 20));
    })();
  }, []);

  const [login, setLogin] = useState({});
  const changeEventHandler = (e) => {
    const { name, value } = e.target;
    setLogin({ ...login, [name]: value });
  };

  const loginEventHandler = async () => {
    // validate with axios and history.push(/homePage)
    const user = await axios.get(`${userUrl}`);
    let exists = false;
    user.data.map((singleUser) => {
      if (singleUser.name === login.name && singleUser.email === login.email) {
        sessionStorage.setItem("userName", login.name);
        exists = true;
      }
    });

    if (exists) {
      history.push("/homePage");
    } else {
      alert("User/Email not corrent");
    }
  };

  return (
    <div className="loginContainerBackground">
      <div className="loginContainer">
        <h1>Welocme To Lusha's Theater</h1>
        <img
          src="https://media.glassdoor.com/sqll/2884527/lusha-systems-squarelogo-1606893616323.png"
          alt="Lusha's logo"
          style={{ borderRadius: "8px" }}
        />
        <div className="loginContainer-login">
          <label>Name: </label>
          <input
            name="name"
            type="text"
            onChange={changeEventHandler}
            className="loginContainer-login-input"
          />
          <br />
          <label>Email: </label>
          <input
            name="email"
            type="email"
            onChange={changeEventHandler}
            className="loginContainer-login-input"
          />
          <br />
          {/* <button onClick={loginEventHandler} id="loginBtn">
            Login
          </button> */}
          <button
            onClick={loginEventHandler}
            className="button"
            style={{ verticalAlign: "middle" }}
          >
            <span>Login</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default observer(Login);
