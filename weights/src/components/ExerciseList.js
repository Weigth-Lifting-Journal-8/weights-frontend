import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import {
  gettingExerciseData,
  deleteWorkout,
  postExercise
} from "../actions/index";

const ExerciseList = props => {
  const [exerciseObject, setExerciseObj] = useState({
    weight: "100lbs",
    reps: 5,
    sets: 5
  });

  const [search, setSearch] = useState("");
  const [selectedExercise, setSelectedExercise] = useState(null);

  const searchHandler = e => {
    setSearch(e.target.value);
  };

  useEffect(() => {
    localStorage.getItem("journalId")
      ? setExerciseObj({
          ...exerciseObject,
          ["journalId"]: localStorage.getItem("journalId")
        })
      : setExerciseObj({
          ...exerciseObject
        });
  }, [localStorage.getItem("journalId")]);

  useEffect(() => {
    props.gettingExerciseData();
  }, []);

  return (
    <div>
      <div className="nav-container">
        <div className="exercise-nav">
          <Link to="/WorkoutList">
            <p onClick={props.deleteWorkout}>Cancel</p>
          </Link>
          <p id="add-exercises">Add Exercises</p>

          <p
            onClick={() => {
              console.log("exercise object", exerciseObject);
              props.postExercise(exerciseObject);
            }}
          >
            <Link to="/SetsReps">Save</Link>
          </p>
        </div>
      </div>

      <div>
        <form className="exercise-form">
          <input
            type="text"
            name="search"
            className="exercise-search"
            onChange={searchHandler}
            placeholder="Search Exercise"
          />
        </form>
      </div>
      <div className="exercise-list-container">
        {search
          ? props.exercises &&
            props.exercises.map((exercise, index) => {
              if (exercise.name.toLowerCase().includes(search)) {
                return (
                  <button
                    className={`exercises`}
                    key={index}
                    style={{
                      background:
                        selectedExercise === exercise.name
                          ? "#bd0202"
                          : "white",
                      color:
                        selectedExercise === exercise.name ? "white" : "black"
                    }}
                    onClick={() => {
                      setExerciseObj({
                        ...exerciseObject,
                        ["exerciseId"]: exercise.id
                      });
                      localStorage.setItem("exerciseId", exercise.id);
                      selectedExercise !== exercise.name
                        ? setSelectedExercise(exercise.name)
                        : setSelectedExercise(null);
                    }}
                  >
                    {exercise.name}
                  </button>
                );
              }
            })
          : props.exercises &&
            props.exercises.map((exercise, index) => (
              <button
                className={`exercises`}
                key={index}
                style={{
                  background:
                    selectedExercise === exercise.name ? "#bd0202" : "white",
                  color: selectedExercise === exercise.name ? "white" : "black",
                  fontWeight: selectedExercise === exercise.name && "bold"
                }}
                onClick={() => {
                  setExerciseObj({
                    ...exerciseObject,
                    ["exerciseId"]: exercise.id
                  });
                  localStorage.setItem("exerciseId", exercise.id);
                  selectedExercise !== exercise.name
                    ? setSelectedExercise(exercise.name)
                    : setSelectedExercise(null);
                }}
              >
                {exercise.name}
              </button>
            ))}
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    exercises: state.exercise.exercises,
    exerciseIsLoading: state.exercise.exerciseIsLoading,
    exerciseObj: state.exercise.exerciseObj
  };
};

export default connect(mapStateToProps, {
  gettingExerciseData,
  deleteWorkout,
  postExercise
})(ExerciseList);
