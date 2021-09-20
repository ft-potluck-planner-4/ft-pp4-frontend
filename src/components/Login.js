import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import "./Login.css";

const initialState = {
  username: "",
  password: ""
};

function Login(props) {
  const [loggedUser, setLoggedUser] = useState(initialState);
  const [error, setError] = useState("");
  const { push } = useHistory();

  const handleChange = e => {
    setLoggedUser({
      ...loggedUser,
      [e.target.name]: e.target.value
    });
  };
  const handleSubmit = e => {};
  //EVENTUAL HANDLE SUBMIT FUNCTION FOR LOGIN?
  // const handleSubmit = e => {
  //   e.preventDefault();
  //   if (logged.username === "" || logged.password === "") {
  //     setError("Username and Password are required fields.");
  //   }
  //   axios
  //     .post(`${/*Eventual POST request to the backend */}`, user)
  //     .then(res => {
  //       // console.log(res);
  //       localStorage.setItem("token", res.data.payload);
  //       push("/potlucks");
  //     })
  //     .catch(err => {
  //       console.log(err);
  //     });
  // };

  return (
    <div className="login">
      <h1>Login Component</h1>

      <form onSubmit={handleSubmit}>
        <label>
          Username:
          <input
            id="login_username"
            type="text"
            name="username"
            value={loggedUser.username}
            onChange={handleChange}
          />
        </label>
        <label>
          Password:
          <input
            id="login_password"
            type="password"
            name="password"
            value={loggedUser.password}
            onChange={handleChange}
          />
        </label>
        <button type="submit">Login</button>
      </form>
      <p className="login_error">{error}</p>
    </div>
  );
}

export default Login;
