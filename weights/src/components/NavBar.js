import React from "react";
import { NavLink } from "react-router-dom";
import { Navigation } from "../styles/NavStyle";

export default function NavBar() {
  const logout = () => {
    localStorage.removeItem("userId");
    localStorage.removeItem("journalId");
    localStorage.removeItem("exerciseId");
    localStorage.removeItem("journalExerciseId");
    localStorage.removeItem("token");
  };

  return (
    <Navigation className="navbar">
      <div>
        <div className="nav-icon">
          <NavLink className="navlink" to="/Dashboard">
            {" "}
            Home Icon{" "}
          </NavLink>
        </div>
        <h4>Home</h4>
      </div>

      <div>
        <div className="nav-icon">
          {/* link for profile */}
          <NavLink to="/emptypage1"> My Profile Icon</NavLink>
        </div>
        <h4>Profile</h4>
      </div>

      <div>
        <div className="nav-icon">
          {/* link for settings */}
          <NavLink to="/emptypage1"> App Settings Icon</NavLink>
        </div>
        <h4>Settings</h4>
      </div>

      <div>
        <div className="nav-icon">
          <NavLink to="/" onClick={() => logout()}>
            {" "}
            Logout Icon{" "}
          </NavLink>
        </div>
        <h4>Logout</h4>
      </div>
    </Navigation>
  );
}
