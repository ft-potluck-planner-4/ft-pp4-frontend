import React, { useState, useEffect } from "react";
import { Route, useHistory } from "react-router-dom";
import "./Potluck.css";
import {Button} from 'reactstrap';

function Potluck(props) {
  const { push } = useHistory();
  //this will eventuall be set to a value given to us by a backend API get request
  const [potluck, setPotluck] = useState({
    id: 1,
    image:
      "https://www.thespruce.com/thmb/xsBQzK-EVqVNu6Xxfq9j6OoLkEc=/3865x2174/smart/filters:no_upscale()/smiling-neighbors-around-potluck-table-in-sunny-park-576799249-5992142a845b340010d36ba8.jpg",
    name: "Kristian's Annual Potluck Fundraiser",
    location: "Riverside, CA",
    date: "10-12-2021",
    time: "3pm PST",
    foods: [
      {
        name: "Potato Salad",
        isPresent: true,
        owner: "Owners Username1"
      },
      {
        name: "Burgers",
        isPresent: true,
        owner: "Owners Username2"
      }
    ],
    guests: [
      {
        id: 1,
        name: "Guest 1",
        isAttending: true
      },
      {
        id: 2,
        name: "Guest 2",
        isAttending: true
      },
      {
        id: 3,
        name: "Guest 3",
        isAttending: false
      }
    ]
  });
  const deleteGuest = () => {};
  const addGuest = () => {
    push(`/potlucks/add`);
  };
  const { id, name, image, date, time, location, foods, guests } = potluck;
  return (
    <div className='potluck-container'>
      <div className="potluck">
        <img src={image} alt={name} className="potluck_image" />
        <h3>Name: {name}</h3>
        <p>Date: {date}</p>
        <p>Location: {location}</p>
        <p>Time: {time}</p>
        {foods.map(food => {
          return (
            <p>
              {food.owner} will bring {food.name}
            </p>
          );
        })}
        <Button onClick={addGuest}>Add New Guest</Button>
        {guests.map(guest => {
          return (
            <>
              {guest.isAttending ? (
                <div className="potluck_guest">
                  <span className="potluck_deleteGuest" onClick={deleteGuest}>
                    ❌
                  </span>
                  <p>{guest.name}</p>
                </div>
              ) : (
                <p></p>
              )}
            </>
          );
        })}
      </div>
    </div>
  );
}

export default Potluck;
