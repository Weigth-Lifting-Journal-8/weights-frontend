import React from "react";
import { NavLink } from "react-router-dom";

export default function EmptyPage1() {
  return (
    <div className="error-page">
      <h1>This page is currently under construction...</h1>

      <p>Come back Soon!</p>

      <NavLink className="error-button" exact to={`/Dashboard`}>
        {" "}
        <button>
          <strong className="button2-content">Back to Dashboard</strong>
        </button>
      </NavLink>
    </div>
  );
}
