import React from "react";

import "./LogIn.css";

function LogIn() {
  return (
    <div className="page-container auth-page">
      <h2 className="page-title">log in</h2>
      <form className="auth-form">
        <input
          type="text"
          placeholder="username"
          className="input username-auth-input"
        />
        <br />
        <button className="button button-auth">submit</button>
      </form>
    </div>
  );
}

export default LogIn;
