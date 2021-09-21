import React from "react";
import {
  Card, CardBody,
  CardTitle, Button, Form, FormGroup, Label, Input
} from 'reactstrap';
import './Signup.css'

function Signup() {
  return (
    <div className='signup-container'>
      <Card className='signup-card'>
        <CardBody className='signup-body'>
          <CardTitle tag="h5">SIGN UP</CardTitle>
          <Form className='signup-form'>
            <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
              <Label for="email" className="mr-sm-2">Email</Label>
              <Input type="email" name="email" id="email" placeholder="email" />
            </FormGroup>
            <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
              <Label for="first_name" className="mr-sm-2">First Name</Label>
              <Input type="text" name="first_name" id="first_name" placeholder="first name" />
            </FormGroup>
            <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
              <Label for="last_name" className="mr-sm-2">Last Name</Label>
              <Input type="text" name="last_name" id="last_name" placeholder="last name" />
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

export default Signup;
