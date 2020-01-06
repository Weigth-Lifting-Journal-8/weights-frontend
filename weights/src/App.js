import React from "react";
import RegistrationForm from "./components/RegistrationForm";
import LoginForm from "./components/LoginForm";
import Dashboard from "./components/Dashboard";
import EmptyPage1 from "./emptypages/emptyPage1";
import EmptyPage2 from "./emptypages/emptyPage2";
import NavBar from "./components/NavBar";
import WorkoutList from "./components/WorkoutList";
import NamingWo from "./components/NamingWo";
import ExerciseList from "./components/ExerciseList";
import { Route } from "react-router-dom";
import PrivateRoute from "./utils/PrivateRoute";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Route exact path="/" component={LoginForm} />
      <Route exact path="/emptypage2" component={EmptyPage2} />
      <PrivateRoute path="/Dashboard" component={Dashboard} />
      <Route exact path="/Register" component={RegistrationForm} />
      <PrivateRoute exact path="/emptypage1" component={EmptyPage1} />
      <PrivateRoute exact path="/ExerciseList" component={ExerciseList} />
      <PrivateRoute path="/Dashboard" component={NavBar} />
      <PrivateRoute path="/WorkoutList" component={WorkoutList} />
      <PrivateRoute path="/NameWorkout" component={NamingWo} />
      <PrivateRoute path="/WorkoutList" component={NavBar} />
    </div>
  );
}

export default App;

//  <PrivateRoute exact path="/ExerciseList" component={ExerciseList} />
