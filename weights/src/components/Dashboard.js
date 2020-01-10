import React from "react";
import { NavLink } from "react-router-dom";

export default function Dashboard() {
  return (
    <div className="dashboard-container">
      <div className="top-section">
        <div className="image-div"></div>
      </div>
      <div className="bottom-section">
        <div className="the-div-buttons-container">
          <div className="div">
            <NavLink className="navlinker" exact to="/WorkoutList">
              <div> Workout Journal </div>
            </NavLink>
          </div>

          <div className="div">
            <NavLink className="navlinker" exact to="/emptypage1">
              <div> Gyms </div>
            </NavLink>
          </div>
          <div className="div">
            <NavLink className="navlinker" exact to="/emptypage1">
              <div> Diet Tracker </div>
            </NavLink>
          </div>
          <div className="div">
            <NavLink className="navlinker" exact to="/emptypage1">
              <div> BMI </div>
            </NavLink>
          </div>
          <div className="div">
            <NavLink className="navlinker" exact to="/emptypage1">
              <div> My Charts </div>
            </NavLink>
          </div>
          <div className="div">
            <NavLink className="navlinker" exact to="/emptypage1">
              <div> Rest Days </div>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}
