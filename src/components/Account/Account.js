import React, { useEffect, useState, useRef } from "react";
import "./Account.css";
import { useSelector, useDispatch } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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
  const { username, userId } = useSelector((state) => state.user);
  const ref = useRef();
  const [usernameInput, setUsernameInput] = useState(`${username}`);
  const [editMode, setEditMode] = useState(false);
  const dispatch = useDispatch();
  const history = useHistory();

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
  };

  const handleChange = (event) => {
    // if(event.keyCode === 13) handleSubmit();
    const { value } = event.target;
    setUsernameInput(value);
  };

  const handleIconClick = () => {
    setEditMode(true);
  };

  return (
    <div className="page-container account-page">
      <h2 className="page-title">account details</h2>
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
                    onClick={handleIconClick}
                    size="m"
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

              {editMode && (
                <div className="submit-icon">
                  <FontAwesomeIcon
                    icon={faCheck}
                    className="account-subcomponent-icon"
                    style={{ color: "green" }}
                  />
                </div>
              )}
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
                <p className="account-subcomponent-child-end">4</p>
              </div>
            </div>
            <button
              className="button button-primary button-45"
              onClick={handleLogOut}
            >
              log out
            </button>
          </section>
          <p className="cta-link" onClick={handleDeleteUser}>
            delete account
          </p>
        </>
      ) : (
        <>
          <p>
            <Link to="/signup" className="cta-link">
              sign up
            </Link>{" "}
            or{" "}
            <Link to="/login" className="cta-link">
              log in
            </Link>{" "}
            to get started
          </p>
        </>
      )}
    </div>
  );
}

export default Account;
