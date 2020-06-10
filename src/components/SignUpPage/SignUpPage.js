import React from "react";
import { Link } from "react-router-dom";
import "./SignUpPage.css";

function SignUpPage() {
  return (
    <div className="page-container auth-page">
      <h2 className="page-title">create an account</h2>
      <p className="error-message"></p>
      <form className="auth-form">
        <input
          type="text"
          placeholder="username"
          className="input username-auth-input"
        />
        <br />
        <button className="button button-auth">submit</button>
      </form>
      <span>
        <Link to="/login" className="cta-link">
          already have an account?
        </Link>
      </span>
    </div>
  );
}

export default SignUpPage;
