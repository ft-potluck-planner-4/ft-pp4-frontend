import React, {useState} from "react";

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
        <div>
            <div className="FoodsUserBringsForm">
                <form>
                    {FoodsNeeded.map(foodItem =>
                    <label> {foodItem}
                        <input type='checkbox'></input>
                    </label>
                    )}
                    <button type='submit'>Commit Foods</button>
                </form>
            </div>
        </div>
    )
}

export default FoodList 