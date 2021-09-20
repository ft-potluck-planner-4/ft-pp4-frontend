import React, { useState, useEffect } from "react";
import axiosWithAuth from "./../utils/axiosWithAuth";
import Potluck from "./Potluck";

function PotluckList() {
  //mocking data we would eventually get back from a backend get request
  const [potlucks, setPotlucks] = useState([
    {
      id: 1,
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

  return (
    <div className="potlucks">
      {potlucks.map(potluck => {
        // console.log(potluck);
        return <Potluck potluck={potluck} />;
      })}
    </div>
  );
}

export default PotluckList;
