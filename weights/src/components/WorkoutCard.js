import React, { useState, useEffect } from "react";
import moment from "moment";
import EditIcon from "../assets/editicon.png";
import AddIcon from "../assets/addicon.png";
import CaretOpen from "../assets/caretopen.png";
import CaretClosed from "../assets/caretclosed.png";
import DeleteIcon from "../assets/deleteicon.png";

// import { axiosWithAuth } from "../utils/axiosWithAuth";

const WorkoutCard = ({ workout, props }) => {
  const [open, setOpen] = useState(false);
  const [array, setArray] = useState([]);
  const [deleted, setDeleted] = useState(false);

  const toggleOpen = () => {
    setOpen(!open);
  };

  const deleteCard = () => {
    props.deleteSetsAndWorkout(workout.id);
  };

  const timedRefresh = timeoutPeriod => {
    setTimeout("location.reload(true);", timeoutPeriod);
  };

  // useEffect(
  //   userId => {
  //     axiosWithAuth()
  //       .get(
  //         `https://weight-lifting-8.herokuapp.com/api/workouts/${workout.id}`
  //       )

  //       .then(response => {
  //         console.log("response data", response);
  //         setArray(response.data.item);
  //       })

  //       .catch(error => {
  //         console.log(error);
  //       });
  //     setDeleted(false);
  //   },
  //   [deleted]
  // );

  return (
    <div className="workout-card">
      <div className="workout-header">
        <div className="name-edit-date">
          <div className="name-edit">
            <h2>
              {workout.workout_name} - {moment(workout.date).format("l")}
            </h2>
            <img
              src={EditIcon}
              alt="Edit icon"
              className="icons-name"
              onClick={() => {
                localStorage.setItem("journalId", workout.id);
                props.history.push("/NameWorkout");
              }}
            />
          </div>
          <div className="spacer"></div>
        </div>
        {open ? (
          <div className="arrow-caret">
            <img
              src={AddIcon}
              alt="Add icon"
              className="icons"
              onClick={() => {
                localStorage.setItem("journalId", workout.id);
                props.history.push("/ExerciseList");
              }}
            />

            <img
              src={DeleteIcon}
              alt="Delete icon"
              className="icons"
              onClick={() => {
                console.log("enter", workout);
                deleteCard();
                setDeleted(true);
                timedRefresh(1000);
              }}
            />
            <img
              src={CaretOpen}
              alt="Open caret icon"
              className="icons-caret"
              onClick={toggleOpen}
            />
          </div>
        ) : (
          <div className="arrow-caret">
            <img
              src={AddIcon}
              className="icons"
              alt="Add icon"
              onClick={() => {
                localStorage.setItem("journalId", workout.id);
                props.history.push("/ExerciseList");
              }}
            />
            <img
              src={DeleteIcon}
              alt="Delete icon"
              className="icons"
              onClick={() => {
                console.log("enter", workout);
                deleteCard();
                setDeleted(true);
                timedRefresh(1000);
              }}
            />
            <img
              src={CaretClosed}
              alt="Closed icon"
              className="icons-caret"
              onClick={toggleOpen}
            />
          </div>
        )}
      </div>
      {open &&
        array.map((exercise, index) => {
          return (
            <div className="workout-exercise" key={index}>
              <div className="workout-text-container">
                <p id="name">{exercise.name}</p>
                <p>Weight: {exercise.weight}</p>
                <p>Reps: {exercise.reps}</p>
                <p>Sets: {exercise.sets}</p>
              </div>

              <div className="workout-icons">
                <img
                  src={EditIcon}
                  alt="Edit icon"
                  className="workout-icon"
                  onClick={() => {
                    console.log("exercise", exercise);
                    localStorage.setItem("jouExeId", exercise.id);
                    localStorage.setItem("journalId", exercise.journalId);
                    localStorage.setItem("exerciseId", exercise.exerciseId);
                    props.history.push("/RepSets");
                  }}
                />
                <img
                  src={DeleteIcon}
                  alt="Delete icon"
                  className="workout-icon"
                  onClick={() => {
                    props.deleteWorkout(exercise.id);
                    timedRefresh(1000);
                  }}
                />
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default WorkoutCard;
