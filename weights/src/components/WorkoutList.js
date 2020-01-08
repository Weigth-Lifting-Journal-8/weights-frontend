import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import WorkoutCard from "./WorkoutCard";
import AddIcon from "../assets/addicon.png";
import { connect } from "react-redux";
import {
  getWorkoutsData,
  getSets,
  deleteSetsAndWorkout,
  deleteWorkout
} from "../actions/index";

const WorkoutList = props => {
  const [search, setSearch] = useState("");

  const searchHandler = e => {
    setSearch(e.target.value);
  };

  const userId = localStorage.getItem("id");
  useEffect(() => {
    props.getWorkoutsData(userId);
  }, []);

  return (
    <div className="workout-list">
      <div className="workout-gradient">
        <h1>My Workout Journal</h1>
        <form className="search-bar">
          <input
            type="text"
            name="search"
            onChange={searchHandler}
            placeholder="Search by Workout Date"
          />
        </form>
      </div>

      <div className="weight-list">
        {search
          ? props.workoutArray &&
            props.workoutArray.map(workout => {
              if (workout.date.includes(search)) {
                return (
                  <WorkoutCard
                    key={workout.id}
                    workout={workout}
                    props={props}
                  />
                );
              }
            })
          : props.workoutArray &&
            props.workoutArray.map(workout => (
              <WorkoutCard key={workout.id} workout={workout} props={props} />
            ))}
      </div>
      <div className="add-workout-button">
        <NavLink className="add-button" exact to="/NameWorkout">
          <img
            src={AddIcon}
            onClick={() => localStorage.removeItem("journalId")}
          />
        </NavLink>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    workoutArray: state.workouts.workoutArray,
    setsArray: state.workouts.setsArray
  };
};

export default connect(mapStateToProps, {
  getWorkoutsData,
  getSets,
  deleteSetsAndWorkout,
  deleteWorkout
})(WorkoutList);
