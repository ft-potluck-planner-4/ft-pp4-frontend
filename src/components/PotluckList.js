import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import axiosWithAuth from "./../utils/axiosWithAuth";
// import "./PotluckList.css";

//Do not get rid of, we need for the accordion styling of the cards//
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

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
    },
    {
      id: 3,
      image: "https://d1fzhre25nnjsm.cloudfront.net/18092421_21_potluck-2.jpg",
      name: "Monica's Surprise Birthday Potluck",
      location: "Chi-Town Suburbs",
      date: "10-24-2021",
      time: "2pm PST",
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
    },
    {
      id: 4,
      image: "https://d1fzhre25nnjsm.cloudfront.net/18092421_21_potluck-2.jpg",
      name: "Allison's Surprise Birthday Potluck",
      location: "Lake Faye-Faye, Arkansas",
      date: "11-08-2021",
      time: "5pm PST",
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
    },
    {
      id: 5,
      image: "https://d1fzhre25nnjsm.cloudfront.net/18092421_21_potluck-2.jpg",
      name: "Scientology Church Potluck",
      location: "Los Angelos",
      date: "09-24-2021",
      time: "3pm PST",
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
    },
    {
      id: 6,
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
    },
    {
      id: 7,
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
    },
    {
      id: 8,
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
    },
    {
      id: 9,
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
    <div className="d-flex flex-wrap justify-content-around align-items-center">
      {potlucks.map(potluck => {
        return (
          <Card style={{ width: "40rem", margin: "3rem" }}>
            <Card.Img variant="top" src={potluck.image} alt="pic goes here" />
            <Card.Body>
              <Card.Title>{potluck.name}</Card.Title>
              <Accordion
                className="justify-content-center"
                style={{ width: "100%" }}>
                <Accordion.Item eventKey={potluck.id} >
                  <Accordion.Header>Learn More and Join!</Accordion.Header>
                  <Accordion.Body>
                    <p>Date: {potluck.date}</p>
                    <p>Location: {potluck.location}</p>
                    <Button onClick={e => handleClick(e, potluck)}>
                      Join Potluck
                    </Button>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </Card.Body>
          </Card>
        );
      })}
    </div>
  );
}

export default PotluckList;
              