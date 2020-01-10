import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Xicon from "../assets/Xicon.png";
import { connect } from "react-redux";
import { postExercise } from "../actions";

const CreateExercise = props => {
  const [exercise, setExercise] = useState({
    Exercise_name: ""
  });

  const inputHandler = e => {
    setExercise({ ...exercise, [e.target.name]: e.target.value });
  };

  return (
    <div className="NameExerciseTop">
      <div className="NameExerciseContainer">
        <div className="name-exercise-card">
          <NavLink className="xbutton" to="/WorkoutList">
            {" "}
            <img src={Xicon} alt="cancel icon x" />{" "}
          </NavLink>
          <h2>Exercise Name</h2>
          <div className="bottom-part-card">
            <input
              className="exercise-name"
              type="text"
              name="exercise"
              value={exercise.name}
              placeholder="Name Your Exercise"
              onChange={inputHandler}
            />
            <button
              className="next-btn"
              onClick={() => {
                if (localStorage.getItem("journalId")) {
                  props.postExercise(workout);
                  console.log("next props", props);
                  props.history.push("/WorkoutList");
                } else {
                  props.updateWorkoutData(workout);
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
  CreateExercise
);
