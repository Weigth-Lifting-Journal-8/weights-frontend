import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Xicon from "../assets/Xicon.png";
import { connect } from "react-redux";
import moment from "moment";
import { addWorkout, editWorkoutName } from "../actions";

const NamingWo = props => {
  const [workout, setWorkout] = useState({
    // userId: localStorage.getItem("userId"),
    workout_name: "",
    date: moment(Date.now()).format("l")
  });

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
              name="workout_name"
              value={workout.name}
              placeholder="Name Your Workout"
              onChange={inputHandler}
            />
            <button
              className="next-btn"
              onClick={() => {
                if (localStorage.getItem("journalId")) {
                  props.editWorkoutName(workout);
                  console.log("next props", props);
                  props.history.push("/WorkoutList");
                } else {
                  props.addWorkout(workout);
                  props.history.push("/ExerciseList");
                }
              }}
            >
              NEXT
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    userId: state.login.userId
  };
};

export default connect(mapStateToProps, { addWorkout, editWorkoutName })(
  NamingWo
);
