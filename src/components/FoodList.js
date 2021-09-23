import React, {useState} from "react";
import { Form, FormGroup, Label, Input, Button} from 'reactstrap';
import './FoodList.css';

const FoodsNeeded = [
    "bananas",
    "apples",
    "oranges",
    "ramen",
    "salmon",
    "tilapia",
    "brussel sprouts",
    "potato salad",
    "pasta salad",
    "hamburger patties",
    "hamburger buns"
];

const FoodList = () =>{

    const [foodsUserBrings, setFoodsUserBrings] = useState([]);

    return(
        <div className='foodlist-container'>
            <div className="listform-container">
                <Form className='list-form'>
                    <h3>Potluck Items Needed</h3>
                    {FoodsNeeded.map(foodItem =>
                    <FormGroup>
                        <Input type='checkbox'/>{''}
                        <Label className='list-label'> {foodItem}</Label>
                    </FormGroup>
                    )}
                    <Button type='submit'>Commit Foods</Button>
                </Form>
            </div>
        </div>
    )
}

export default FoodList 