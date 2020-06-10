import React from "react";
import "./Account.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencilAlt, faPlus } from "@fortawesome/free-solid-svg-icons";

function Account() {
  return (
    <div className="page-container">
      <h2 className="page-title">account details</h2>

      <div className="account-details">
        <div className="account-subcomponent">
          <FontAwesomeIcon
            icon={faPencilAlt}
            className="account-subcomponent-icon"
          />
          <p className="account-subcomponent-child">username</p>
          <p className="account-subcomponent-child-end">sophiesigh</p>
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
      </div>
      <p className="cta-link">sign out</p>
      <p className="cta-link">delete account</p>
    </div>
  );
}

export default Account;
