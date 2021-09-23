import React, { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Header from "./components/Header";
import PotluckList from "./components/PotluckList";
import FoodList from "./components/FoodList";
import Potluck from "./components/Potluck";
import AddPotluck from './components/AddPotluck';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/FoodList">
            <Header />
            <FoodList />
          </Route>
          <Route path="/potlucks/:id">
            <Header />
            <Potluck />
          </Route>
          <Route exact path="/potlucks">
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
          <Route path="/addPotluck">
            <Header />
            <AddPotluck />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
