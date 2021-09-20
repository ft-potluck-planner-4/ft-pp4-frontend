import React from "react";
import {
  Card, CardText, CardBody,
  CardTitle, Button, Form, FormGroup, Label, Input
} from 'reactstrap';
import './Login.css'


function Login() {
  return (
    <div className='card-container'>
      <Card className='card'>
        <CardBody className='card-body'>
          <CardTitle tag="h5">LOGIN</CardTitle>
          <Form className='form'>
            <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
              <Label for="email" className="mr-sm-2">Email</Label>
              <Input type="email" name="email" id="exampleEmail" placeholder="email" />
            </FormGroup>
            <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
              <Label for="examplePassword" className="mr-sm-2">Password</Label>
              <Input type="password" name="password" id="examplePassword" placeholder="password" />
            </FormGroup>
            <Button color='primary'>Button</Button>
          </Form>
        </CardBody>
      </Card>
    </div>
  );
}

export default Login;
