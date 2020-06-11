import React, { useEffect } from "react";
import "./Account.css";

import { useSelector, useDispatch } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencilAlt, faPlus } from "@fortawesome/free-solid-svg-icons";
import {
  logOutUser,
  deleteUserAccount,
  updateUsername,
} from "../../utils/redux/user";

function Account() {
  const { username, userId } = useSelector((state) => state.user);
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

  useEffect(() => {}, [username]);

  return (
    <div className="page-container account-page">
      <h2 className="page-title">account details</h2>
      {username ? (
        <>
          <section className="account-body">
            <div className="account-subcomponent">
              <FontAwesomeIcon
                icon={faPencilAlt}
                className="account-subcomponent-icon"
              />
              <p className="account-subcomponent-child">username</p>
              <p className="account-subcomponent-child-end">{username}</p>
            </div>

            <div className="account-subcomponent">
              <Link to="/links">
                <FontAwesomeIcon
                  icon={faPlus}
                  className="account-subcomponent-icon"
                />
              </Link>
              <p className="account-subcomponent-child">total links</p>
              <p className="account-subcomponent-child-end">4</p>
            </div>
            <button
              className="button button-primary button-400"
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
