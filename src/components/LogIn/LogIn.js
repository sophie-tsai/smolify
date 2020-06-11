import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { logInUser } from "../../utils/redux/user";
import "./LogIn.css";

function LogIn() {
  const dispatch = useDispatch();
  const history = useHistory();
  const [usernameInput, setUsernameInput] = useState("");
  const [statusMessage, setStatusMessage] = useState("");
  const invalidUsername = "username does not exist";

  const handleLogIn = (event) => {
    event.preventDefault();
    if (!usernameInput) {
      setStatusMessage(invalidUsername);
      return;
    }
    dispatch(logInUser(usernameInput));
    setUsernameInput("");
    history.push("/links");
  };

  const handleChange = (event) => {
    if (statusMessage) setStatusMessage("");
    const { value } = event.target;
    setUsernameInput(value);
  };

  return (
    <div className="page-container auth-page">
      <h2 className="page-title">log in</h2>
      <form className="auth-form">
        <input
          type="text"
          placeholder="username"
          className="input username-auth-input"
          onChange={handleChange}
          value={usernameInput}
        />
        <br />
        <button className="button button-auth" onClick={handleLogIn}>
          submit
        </button>
      </form>
    </div>
  );
}

export default LogIn;
