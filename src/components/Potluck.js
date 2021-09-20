import React from "react";

function Potluck(props) {
  console.log("props in potluck:", props);
  const { id, name, date, location, time, foods, guests } = props.potluck;
  return (
    <div className="potluck">
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
      {guests.map(guest => {
        return (
          <p>
            {guest.name} is attending? {guest.isAttending.toString()}
          </p>
        );
      })}
    </div>
  );
}

export default Potluck;
