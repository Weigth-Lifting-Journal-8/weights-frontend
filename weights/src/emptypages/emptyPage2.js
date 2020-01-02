import React from "react";
import { NavLink } from "react-router-dom";

export default function EmptyPage2() {
  return (
    <div className="error-page">
      <h1>This page is currently under construction...</h1>
      <p> It will be complete soon....</p>
      <NavLink className="error-button" exact to={`/Register`}>
        <button>
          <strong className="button-content">Sign Up</strong>
        </button>
      </NavLink>
    </div>
  );
}
