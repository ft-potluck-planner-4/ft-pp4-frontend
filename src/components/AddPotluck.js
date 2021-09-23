import React, {useState} from 'react';
import { useHistory } from 'react-router-dom';
import { Form, FormGroup, Label, Input, Col, Button } from 'reactstrap';
import "./AddPotluck.css";

const initialState = {
    potluck_name: '',
    location_name: '',
    location_address: '',
    location_city: '',
    location_state: '',
    location_zip: '',
    date: '',
    duration: '',
    organizer: ''
}

// not really sure how to create a list of items needed from the organizers side

export default function AddPotluck(){
    const [newPotluck, setNewPotluck] = useState(initialState);
    const [error, setError] = useState('');
    const { push } = useHistory();

    const handleChange = e => {
        setNewPotluck({
            ...newPotluck,
            [e.target.name]: e.target.value
        });
    };
    const handleSubmit = e => {
        console.log(
            'potluck_name: ',
            newPotluck.potluck_name,
            'location_name: ',
            newPotluck.location_name,
            'location_address: ',
            newPotluck.location_address,
            'location_city: ',
            newPotluck.location_city,
            'location_state: ',
            newPotluck.location_state,
            'location_zip: ',
            newPotluck.location_zip,
            'date: ',
            newPotluck.date,
            'duration: ',
            newPotluck.duration,
            'organizer: ',
            newPotluck.organizer
        );
        push('/addPotluck');
    }

    return(
        <div className='add-container'>
            <Form className='add-form' onSubmit={handleSubmit}> 
                <h2>Create a New Potluck</h2>
                <FormGroup row>
                    <Label for='potluck_name' sm={2}>Potluck Name</Label>
                    <Col sm={10}>
                        <Input type='text' name='potluck_name' id='potluck_name' placeholder='potluck name' value={newPotluck.potluck_name} onChange={handleChange} />
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label for='location_name' sm={2}>Name of Location</Label>
                    <Col sm={10}>
                        <Input type='text' name='location_name' id='location_name' placeholder='name of location' value={newPotluck.location_name} onChange={handleChange}/>
                    </Col>
                </FormGroup>  
                <FormGroup row>
                    <Label for='location_address' sm={2}>Address</Label>
                    <Col sm={10}>
                        <Input type='text' name='location_address' id='location_address' placeholder='123 Main St' value={newPotluck.location_address} onChange={handleChange}/>
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label for='location_city' sm={2}>City</Label>
                    <Col sm={10}>
                        <Input type='text' name='location_city' id='location_city' placeholder='city' value={newPotluck.location_city} onChange={handleChange}/>
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label for='location_state' sm={2}>State</Label>
                    <Col sm={10}>
                        <Input type='text' name='location_state' id='location_state' placeholder='state' value={newPotluck.location_state} onChange={handleChange} />
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label for='location_zip' sm={2}>Zip Code</Label>
                    <Col sm={10}>
                        <Input type='text' name='location_zip' id='location_zip' placeholder='zip code' value={newPotluck.location_zip} onChange={handleChange}/>
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label for='date' sm={2}>Date</Label>
                    <Col sm={10}>
                        <Input type='date' name='date' id='date' placeholder='date' value={newPotluck.date} onChange={handleChange}/>
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label for='duration' sm={2}>Duration</Label>
                    <Col sm={10}>
                        <Input type='datetime' name='duration' id='duration' placeholder='3 Hours' value={newPotluck.duration} onChange={handleChange}/>
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label for='organizer' sm={2}>Organizer</Label>
                    <Col sm={10}>
                        <Input type='text' name='organizer' id='organizer' placeholder='organizer name' value={newPotluck.organizer} onChange={handleChange}/>
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Col sm={{ size: 10, offset:1 }}>
                        <Button type='submit'>Sumbit</Button>
                    </Col>
                </FormGroup>
            </Form>
            <p className='formError'>{error}</p>
        </div>
    )
};