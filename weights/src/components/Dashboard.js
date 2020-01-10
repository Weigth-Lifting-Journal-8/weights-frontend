import React from "react";
import { NavLink } from "react-router-dom";
import Style from "styled-components";

const Menu = Style.div`

color: black;
padding: 15%;
vertical-align: center;
font-weight: bolder;
font-size: 35px;

`;

export default function Dashboard() {
  return (
    <div className="dashboard-container">
      {/* <div className="top-section">
        <div className="image-div"></div>
      </div> */}
      <div className="bottom-section">
        <div className="the-div-buttons-container">
          <div className="div">
            <NavLink className="navlinker" exact to="/WorkoutList">
              <Menu> Workout Journal </Menu>
            </NavLink>
          </div>

          <div className="div">
            <NavLink className="navlinker" exact to="/emptypage1">
              <Menu> Gyms </Menu>
            </NavLink>
          </div>
          <div className="div">
            <NavLink className="navlinker" exact to="/emptypage1">
              <Menu> Diet Tracker </Menu>
            </NavLink>
          </div>
          <div className="div">
            <NavLink className="navlinker" exact to="/emptypage1">
              <Menu> BMI </Menu>
            </NavLink>
          </div>
          <div className="div">
            <NavLink className="navlinker" exact to="/emptypage1">
              <Menu> My Charts </Menu>
            </NavLink>
          </div>
          <div className="div">
            <NavLink className="navlinker" exact to="/emptypage1">
              <Menu> Rest Days </Menu>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}
