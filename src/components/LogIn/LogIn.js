import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { logInUser } from "../../utils/redux/user";
import "./LogIn.css";
import { setLogInCode } from "../../utils/redux/statusCodes";

function LogIn() {
  const dispatch = useDispatch();
  const history = useHistory();
  const statusCode = useSelector((state) => state.statusCodes.logIn);
  const [usernameInput, setUsernameInput] = useState("");
  const [statusMessage, setStatusMessage] = useState("");
  const invalidUsername = "username does not exist";
  const invalidLength = "please enter username";

  useEffect(() => {
    if (statusCode === 0) setStatusMessage("");

    if (statusCode === 404) setStatusMessage(invalidUsername);

    if (statusCode === 200) redirectToLinks();
  }, [statusCode]);

  const redirectToLinks = () => {
    history.push("/links");
    setUsernameInput("");
    console.log("log in successful");
    setStatusMessage("");
    dispatch(setLogInCode(0));
  };

  const handleLogIn = (event) => {
    event.preventDefault();
    if (!usernameInput) {
      setStatusMessage(invalidLength);
      return;
    }
    dispatch(logInUser(usernameInput));
  };

  const handleChange = (event) => {
    if (event.keyCode === 13) handleLogIn();
    if (statusMessage) setStatusMessage("");
    if (statusCode !== 0) {
      dispatch(setLogInCode(0));
    }
    const { value } = event.target;
    setUsernameInput(value);
  };

  return (
    <div className="page-container auth-page">
      <h2 className="page-title">log in</h2>
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
        <button className="button button-auth" onClick={handleLogIn}>
          submit
        </button>
      </form>
    </div>
  );
}

export default LogIn;
