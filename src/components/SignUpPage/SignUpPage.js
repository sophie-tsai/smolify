import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { createUserAccount } from "../../utils/redux/user";
import { Link } from "react-router-dom";
import "./SignUpPage.css";
import { setSignUpCode } from "../../utils/redux/statusCodes";

function SignUpPage() {
  const dispatch = useDispatch();
  const statusCode = useSelector((state) => state.statusCodes.signUp);
  const history = useHistory();
  const [usernameInput, setUsernameInput] = useState("");
  const [statusMessage, setStatusMessage] = useState("");
  const invalidLength = "please enter username";
  const duplicateUser = "username already taken";

  useEffect(() => {
    if (statusCode === 403) setStatusMessage(duplicateUser);
    if (statusCode === 200) redirectToLinks();
  }, [statusCode]);

  const redirectToLinks = () => {
    history.push("/links");
    setUsernameInput("");
    console.log("sign up successful");
    setStatusMessage("");
    dispatch(setSignUpCode(0));
  };

  const handleSignUp = async (event) => {
    event.preventDefault();
    try {
      //check if username was entered
      if (!usernameInput) {
        setStatusMessage(invalidLength);
        return;
      }

      //attempt to create a user account
      dispatch(createUserAccount(usernameInput));
    } catch (error) {
      console.error(error);
    }
  };

  const handleChange = (event) => {
    if (event.keyCode === 13) handleSignUp();
    if (statusMessage) setStatusMessage("");
    if (statusCode !== 0) {
      dispatch(setSignUpCode(0));
    }
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
