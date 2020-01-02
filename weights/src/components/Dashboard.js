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
            <NavLink className="the-navlink" exact to="/WorkoutList">
              <div> Workout History </div>
            </NavLink>
          </div>

          <div className="div">
            <NavLink className="the-navlink" exact to="/emptypage1">
              <div> Anything (e.g. BMI) </div>
            </NavLink>
          </div>
          <div className="div">
            <NavLink className="the-navlink" exact to="/emptypage1">
              <div> Anything (e.g. diet) </div>
            </NavLink>
          </div>
          <div className="div">
            <NavLink className="the-navlink" exact to="/emptypage1">
              <div> Anything (e.g. Gyms) </div>
            </NavLink>
          </div>
          <div className="div">
            <NavLink className="the-navlink" exact to="/emptypage1">
              <div> Anything (e.g. charts) </div>
            </NavLink>
          </div>
          <div className="div">
            <NavLink className="the-navlink" exact to="/emptypage1">
              <div> Anything (e.g. rest days) </div>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}
