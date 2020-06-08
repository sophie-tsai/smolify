import React from "react";
import "./SignUpPage.css";

function SignUpPage() {
  return (
    <div className="page-container sign-up-page">
      <h2 className="page-title">create an account</h2>
      <form className="signup-form">
        <input
          type="text"
          placeholder="username"
          className="input username-signup-input"
        />
        <br />
        <button className="button button-signup">submit</button>
      </form>
      <p className="cta-link">already have an account?</p>
    </div>
  );
}

export default SignUpPage;
