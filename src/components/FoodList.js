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
            <div className="foodlist-form">
                <Form>
                    {FoodsNeeded.map(foodItem =>
                    <Label> {foodItem}
                        <Input type='checkbox'></Input>
                    </Label>
                    )}
                    <Button type='submit'>Commit Foods</Button>
                </Form>
            </div>
        </div>
    )
}

export default FoodList 