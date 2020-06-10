import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import "./LinkComp.css";

function LinkComp() {
  return (
    <div className="link-div">
      <FontAwesomeIcon icon={faTimes} className="delete-icon" />
      <div className="links">
        <p className="short-link">www.smolify.io/d6c39</p>
        <p className="long-link">www.google.com</p>
      </div>
      <p className="link-info">times clicked: 4</p>
    </div>
  );
}

export default LinkComp;
