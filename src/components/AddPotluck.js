import React from 'react';
import { Form, Row, FormGroup, Label, Input, Col, Button } from 'reactstrap';
import "./AddPotluck.css";

export default function AddPotluck(){
    return(
        <div className='add-container'>
            <Form className='add-form'> 
                <h2>Create a New Potluck</h2>
                <FormGroup row>
                    <Label for='potluck_name' sm={2}>Potluck Name</Label>
                    <Col sm={10}>
                        <Input type='text' name='potluck_name' id='potluck_name' placeholder='potluck name'/>
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label for='location_name' sm={2}>Name of Location</Label>
                    <Col sm={10}>
                        <Input type='text' name='location_name' id='location_name' placeholder='name of location'/>
                    </Col>
                </FormGroup>  
                <FormGroup row>
                    <Label for='location_address' sm={2}>Address</Label>
                    <Col sm={10}>
                        <Input type='text' name='location_address' id='location_address' placeholder='123 Main St'/>
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label for='location_city' sm={2}>City</Label>
                    <Col sm={10}>
                        <Input type='text' name='location_city' id='location_city' placeholder='city'/>
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label for='location_state' sm={2}>State</Label>
                    <Col sm={10}>
                        <Input type='text' name='location_state' id='location_state' placeholder='state' />
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label for='location_zip' sm={2}>Zip Code</Label>
                    <Col sm={10}>
                        <Input type='text' name='location_zip' id='location_zip' placeholder='zip code' />
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label for='date' sm={2}>Date</Label>
                    <Col sm={10}>
                        <Input type='date' name='date' id='date' placeholder='date'/>
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label for='duration' sm={2}>Duration</Label>
                    <Col sm={10}>
                        <Input type='datetime' name='duration' id='duration' placeholder='3 Hours'/>
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label for='organizer' sm={2}>Organizer</Label>
                    <Col sm={10}>
                        <Input type='text' name='organizer' id='organizer' placeholder='organizer name'/>
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Col sm={{ size: 10, offset:1 }}>
                        <Button>Sumbit</Button>
                    </Col>
                </FormGroup>
            </Form>
        </div>
    )
};