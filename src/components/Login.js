import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import {
  Card, CardBody,
  CardTitle, Button, Form, FormGroup, Label, Input
} from 'reactstrap';
import "./Login.css";

const initialState = {
  email: "",
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
  const handleSubmit = e => {
    console.log(
      "Email: ",
      loggedUser.email,
      "Password: ",
      loggedUser.password
    );
    push("/potlucks");
  };
  //EVENTUAL HANDLE SUBMIT FUNCTION FOR LOGIN?
  // const handleSubmit = e => {
  //   e.preventDefault();
  //   if (logged.email === "" || logged.password === "") {
  //     setError("Email and Password are required fields.");
  //   }
  //   axios
  //     .post(`${/*PATH TO BACKEND POST REQUEST FOR USERS */}`, user)
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
    <div className='login-container'>
      <Card className='login-card'>
        <CardBody className='login-body'>
          <CardTitle tag="h5">LOGIN</CardTitle>
          <Form className='login-form' onSubmit={handleSubmit}>
            <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
              <Label for="email" className="mr-sm-2">Email</Label>
              <Input type="email" name="email" id="email" placeholder="email" value={loggedUser.email} onChange={handleChange}/>
            </FormGroup>
            <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
              <Label for="password" className="mr-sm-2">Password</Label>
              <Input type="password" name="password" id="password" placeholder="password" value={loggedUser.password} onChange={handleChange}/>
            </FormGroup>
            <Button color='secondary' type="submit">Let's Go!</Button>
          </Form>
        <p className="login_error">{error}</p>
        </CardBody>
      </Card>
    </div>
  );
}

export default Login;
