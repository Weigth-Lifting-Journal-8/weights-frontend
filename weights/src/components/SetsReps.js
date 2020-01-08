import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { updateWorkoutData } from "../actions/exerciseActions";
import CheckMark from "../assets/checkmark.png";

const RepWeight = props => {
  const [form, setForm] = useState({
    sets: "",
    reps: "",
    weight: "",
    journalId: Number.parseInt(localStorage.getItem("journalid")),
    exerciseId: Number.parseInt(localStorage.getItem("exerciseId"))
  });

  const changeHandler = event => {
    if (event.target.name === "weight") {
      setForm({ ...form, [event.target.name]: event.target.value });
    } else {
      setForm({
        ...form,
        [event.target.name]: Number.parseInt(event.target.value)
      });
    }
  };

  // console.log(form);

  const submitForm = event => {
    event.preventDefault();
    props.updateWorkoutData(form);
  };

  return (
    <div className="container">
      <div className="nav">
        <NavLink to="/WorkoutList" className="navlink">
          {" "}
          Cancel{" "}
        </NavLink>
        <h2> Add Exercises </h2>
        <NavLink to="/WorkoutList" className="navlink">
          {" "}
          Save{" "}
        </NavLink>
      </div>
      <div className="workoutname">
        <h1>{props.exerciseObj.name && props.exerciseObj.name}</h1>
      </div>

      <form className="repweight">
        <div className="setrepweight">
          <div className="sets">
            <label htmlFor="Sets">
              {" "}
              <h2>Sets</h2>{" "}
            </label>
            <input
              className="input"
              name="sets"
              type="number"
              value={form.sets}
              onChange={changeHandler}
              placeholder="0"
            />
          </div>
          <div className="reps">
            <label htmlFor="Reps">
              {" "}
              <h2>Reps</h2>{" "}
            </label>
            <input
              className="input"
              name="reps"
              type="number"
              value={form.reps}
              onChange={changeHandler}
              placeholder="0"
            />
          </div>
          <div className="weight">
            <label htmlFor="Weight">
              {" "}
              <h2>Weight</h2>{" "}
            </label>
            <input
              className="input"
              name="weight"
              type="text"
              value={form.weight}
              onChange={changeHandler}
              placeholder="0"
            />
          </div>
        </div>
        <div className="navlinkcheck">
          {" "}
          <button
            type="button"
            onClick={event => {
              submitForm(event);
              props.history.push("/WorkoutList");
            }}
          >
            <img src={CheckMark} alt="check ok icon" />
          </button>{" "}
        </div>
      </form>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    exerciseObj: state.exercise.exerciseObj
  };
};

export default connect(mapStateToProps, { updateWorkoutData })(RepWeight);
