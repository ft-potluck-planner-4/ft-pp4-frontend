import React, { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Header from "./components/Header";
import PotluckList from "./components/PotluckList";

import FoodList from "./components/FoodList";

import Potluck from "./components/Potluck";


function App() {
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
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/FoodList">
            <FoodList/>
          </Route>
          <Route path="/potlucks">
            <Header />
            <PotluckList />
          </Route>
          <Route path="/signup">
            <Header />
            <Signup />
          </Route>
          <Route path="/login">
            <Header />
            <Login />
          </Route>
          <Route path="/">
            <Header />
            <Login />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
