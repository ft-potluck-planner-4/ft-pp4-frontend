import React from "react";
import {
  Card, CardBody,
  CardTitle, Button, Form, FormGroup, Label, Input
} from 'reactstrap';
import './Login.css'


function Login() {
  return (
    <div className='login-container'>
      <Card className='login-card'>
        <CardBody className='login-body'>
          <CardTitle tag="h5">LOGIN</CardTitle>
          <Form className='login-form'>
            <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
              <Label for="email" className="mr-sm-2">Email</Label>
              <Input type="email" name="email" id="email" placeholder="email" />
            </FormGroup>
            <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
              <Label for="password" className="mr-sm-2">Password</Label>
              <Input type="password" name="password" id="password" placeholder="password" />
            </FormGroup>
            <Button color='secondary'>Let's Go!</Button>
          </Form>
        </CardBody>
      </Card>
    </div>
  );
}

export default Login;
