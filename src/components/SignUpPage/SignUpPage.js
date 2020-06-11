import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { createUserAccount } from "../../utils/redux/user";
import { Link } from "react-router-dom";
import "./SignUpPage.css";

function SignUpPage() {
  const dispatch = useDispatch();
  const history = useHistory();
  const [usernameInput, setUsernameInput] = useState("");
  const [statusMessage, setStatusMessage] = useState("");
  const invalidLength = "username must be over 1 character long";

  const handleSignUp = (event) => {
    event.preventDefault();
    if (!usernameInput) {
      setStatusMessage(invalidLength);
      return;
    }
    setUsernameInput("");
    dispatch(createUserAccount(usernameInput));
    history.push("/links");
  };

  const handleChange = (event) => {
    setStatusMessage("");
    const { value } = event.target;
    setUsernameInput(value);
  };

  return (
    <div className="page-container auth-page">
      <h2 className="page-title">create an account</h2>
      <strong className="error-message">{statusMessage}</strong>
      <form className="auth-form">
        <input
          type="text"
          placeholder="username"
          className="input username-auth-input"
          onChange={handleChange}
          value={usernameInput}
        />
        <br />
        <button className="button button-auth" onClick={handleSignUp}>
          submit
        </button>
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
