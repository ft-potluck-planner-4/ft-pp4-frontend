import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import axiosWithAuth from "./../utils/axiosWithAuth";
import "./PotluckList.css";

function PotluckList(props) {
  const { push } = useHistory();
  // console.log(push);
  //mocking data we would eventually get back from a backend get request
  const [potlucks, setPotlucks] = useState([
    {
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
        }
      ]
    },
    {
      id: 2,
      image: "https://d1fzhre25nnjsm.cloudfront.net/18092421_21_potluck-2.jpg",
      name: "Steven's Surprise Birthday Potluck",
      location: "China",
      date: "09-24-2021",
      time: "1pm PST",
      foods: [
        {
          name: "Sushi Platter",
          isPresent: false,
          owner: "Owners Username3"
        },
        {
          name: "Burgers",
          isPresent: true,
          owner: "Owners Username4"
        }
      ],
      guests: [
        {
          id: 3,
          name: "Guest 3",
          isAttending: true
        },
        {
          id: 4,
          name: "Guest 4",
          isAttending: false
        }
      ]
    }
  ]);

  //eventual useEffect that will fetch the potluck List from the backend
  //   useEffect(() => {
  //     axiosWithAuth()
  //       .get("/potlucks")
  //       .then(res => {
  //         // console.log(res);
  //           setPotlucks(res.data)
  //       })
  //       .catch(err => {
  //         console.log(err);
  //       });
  //   }, []);
  function handleClick(e, item) {
    e.preventDefault();
    push(`/potlucks/${item.id}`);
  }
  return (
    <div className="potlucks">
      {potlucks.map(potluck => (
        <div
          onClick={e => handleClick(e, potluck)}
          className="potlucks_card"
          key={potluck.id}
        >
          <img
            className="potlucks_image"
            src={potluck.image}
            alt={potluck.name}
          />
          <p>{potluck.name}</p>
          <p>{potluck.location}</p>
          <p>{potluck.time}</p>
        </div>
      ))}
    </div>
  );
}

export default PotluckList;
