import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Xicon from "../assets/Xicon.png";
// import { connect } from "react-redux";
import moment from "moment";
// import { makeWorkout, editWorkoutName } from "../actions"; need backend

const NamingWo = props => {
  const [workout, setWorkout] = useState({
    userId: localStorage.getItem("userId"),
    name: "",
    date: moment(Date.now()).format("l")
  });
  //need to push the workoutName to workout object in API

  const inputHandler = e => {
    setWorkout({ ...workout, [e.target.name]: e.target.value });
  };

  return (
    <div className="NameWorkoutTop">
      <div className="NameWorkoutContainer">
        <div className="name-workout-card">
          <NavLink className="xbutton" to="/WorkoutList">
            {" "}
            <img src={Xicon} alt="cancel icon x" />{" "}
          </NavLink>
          <h2>Name your workout</h2>
          <div className="bottom-part-card">
            <input
              className="type-workout"
              type="text"
              name="name"
              value={workout.name}
              placeholder="Name Your Workout"
              onChange={inputHandler}
            />
            <button
              className="next-btn"
              onClick={() => {
                // if (localStorage.getItem("journalId")) {
                //   props.editWorkoutName(workout);
                //   console.log("next props", props);
                //   props.history.push("/WorkoutList");
                // } else {
                props.makeWorkout(workout);
                props.history.push("/ExerciseList");
              }}
              // }
            >
              NEXT
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NamingWo;

//https://github.com/Build-Week-Arp/Frontend/blob/new-app/src/components/UploadModal.js
