import React from 'react';
import { Form, Row, FormGroup, Label, Input, Col, Button } from 'reactstrap';
import "./AddPotluck.css";

export default function AddPotluck(){
    return(
        <div className='add-container'>
            <Form className='add-form'> 
                <h2>Create a New Potluck</h2>
                <FormGroup>
                    <Label for='potluck_name'>Potluck Name</Label>
                    <Input type='text' name='potluck_name' id='potluck_name' placeholder='potluck name'/>
                </FormGroup>
                <FormGroup>
                    <Label for='location_name'>Name of Location</Label>
                    <Input type='text' name='location_name' id='location_name' placeholder='name of location'/>
                </FormGroup>  
                <FormGroup>
                    <Label for='location_address'>Address</Label>
                    <Input type='text' name='location_address' id='location_address' placeholder='123 Main St'/>
                </FormGroup>
                <Row>
                    <Col md={5}>
                        <FormGroup>
                            <Label for='location_city'>City</Label>
                            <Input type='text' name='location_city' id='location_city' placeholder='city'/>
                        </FormGroup>
                    </Col>
                    <Col md={4}>
                        <FormGroup>
                            <Label for='location_state'>State</Label>
                            <Input type='text' name='location_state' id='location_state' placeholder='state' />
                        </FormGroup>
                    </Col>
                    <Col md={2}>
                        <FormGroup>
                            <Label for='location_zip'>Zip Code</Label>
                            <Input type='text' name='location_zip' id='location_zip' placeholder='zip code' />
                        </FormGroup>
                    </Col>
                </Row>
                <FormGroup>
                    <Label for='date'>Date</Label>
                    <Input type='date' name='date' id='date' placeholder='date'/>
                </FormGroup>
                <FormGroup>
                    <Label for='duration'>Duration</Label>
                    <Input type='datetime' name='duration' id='duration' placeholder='3 Hours'/>
                </FormGroup>
                <FormGroup>
                    <Label for='organizer'>Organizer</Label>
                    <Input type='text' name='organizer' id='organizer' placeholder='organizer name'/>
                </FormGroup>
                <FormGroup>
                    <Col sm={{ size: 10, offset:1 }}>
                        <Button>Sumbit</Button>
                    </Col>
                </FormGroup>
            </Form>
        </div>
    )
};