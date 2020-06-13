import React, { useEffect, useState, useRef } from "react";
import "./Account.css";
import { useSelector, useDispatch } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { setUpdateCode } from "../../utils/redux/statusCodes";
import NoAccount from "./NoAccount";
import {
  faPencilAlt,
  faPlus,
  faCheck,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import {
  logOutUser,
  deleteUserAccount,
  updateUsername,
} from "../../utils/redux/user";

function Account() {
  const dispatch = useDispatch();
  const history = useHistory();
  const ref = useRef();
  const { username, userId } = useSelector((state) => state.user);
  const statusCode = useSelector((state) => state.statusCodes.update);
  const { totalLinks } = useSelector((state) => state.links);
  const [statusMessage, setStatusMessage] = useState("");
  const [usernameInput, setUsernameInput] = useState("");
  const [editMode, setEditMode] = useState(false);
  const duplicateUser = "username already taken";
  const invalidLength = "please enter username";

  useEffect(() => {
    if (editMode) ref.current.focus();
  }, [editMode]);

  useEffect(() => {
    if (statusCode === 403) setStatusMessage(duplicateUser);
  }, [statusCode]);

  useEffect(() => {
    dispatch(setUpdateCode(0));
  }, []);

  const handleLogOut = () => {
    dispatch(logOutUser());
    history.push("/");
  };

  const handleDeleteUser = () => {
    if (
      window.confirm(
        "are you sure you want to delete your account? this will delete all your links as well!"
      )
    ) {
      dispatch(deleteUserAccount(userId));
    }
    history.push("/");
  };

  const handleSubmit = () => {
    if (!usernameInput) {
      setStatusMessage(invalidLength);
      return;
    }
    dispatch(updateUsername(userId, usernameInput));
    // setEditMode(false);
  };

  const handleChange = (event) => {
    if (statusMessage) setStatusMessage("");
    if (statusCode !== 0) {
      dispatch(setUpdateCode(0));
    }

    const { value } = event.target;
    setUsernameInput(value);
  };

  return (
    <div className="page-container account-page">
      <h2 className="page-title">account details</h2>
      <strong className="error-message">{statusMessage}</strong>
      {username ? (
        <>
          <section className="account-body">
            <div className="account-subcomponent">
              <div className="edit-icons-div">
                {editMode ? (
                  <FontAwesomeIcon
                    icon={faTimes}
                    className="account-subcomponent-icon"
                    onClick={() => setEditMode(false)}
                  />
                ) : (
                  <FontAwesomeIcon
                    icon={faPencilAlt}
                    className="account-subcomponent-icon"
                    onClick={() => setEditMode(true)}
                  />
                )}
              </div>

              {/* box containing information */}
              <div className="inside-box">
                <p className="account-label">username</p>
                {editMode ? (
                  <input
                    ref={ref}
                    type="text"
                    className="account-subcomponent-child-input"
                    onChange={handleChange}
                    value={usernameInput}
                  />
                ) : (
                  <p className="account-value">{username}</p>
                )}
              </div>

              <div className="submit-icon">
                {editMode && (
                  <FontAwesomeIcon
                    icon={faCheck}
                    className="account-subcomponent-icon"
                    style={{ color: "green" }}
                    onClick={handleSubmit}
                  />
                )}
              </div>
            </div>

            <div className="account-subcomponent">
              <div className="edit-icons-div">
                <Link to="/links">
                  <FontAwesomeIcon
                    icon={faPlus}
                    className="account-subcomponent-icon"
                  />
                </Link>
              </div>
              <div className="inside-box">
                <p className="account-subcomponent-child">total links</p>
                <p className="account-subcomponent-child-end">{totalLinks}</p>
              </div>
              <div className="submit-icon"></div>
            </div>

            <div className="account-subcomponent">
              <div className="edit-icons-div"></div>
              <button
                className="button button-primary button-45"
                onClick={handleLogOut}
              >
                log out
              </button>
              <div className="submit-icon"></div>
            </div>
          </section>

          <p className="cta-link" onClick={handleDeleteUser}>
            delete account
          </p>
        </>
      ) : (
        <NoAccount />
      )}
    </div>
  );
}

export default Account;
