import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Header from "./components/Header";
import PotluckList from "./components/PotluckList";

import FoodList from "./components/FoodList";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/FoodList">
            <FoodList />
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
