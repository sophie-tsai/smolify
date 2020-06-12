import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import "./LinkComp.css";

function LinkComp(props) {
  const BASE_URL = "http://localhost:5000";
  const shortURL = `${BASE_URL}/${props.token}`;

  return (
    <div className="link-div">
      <FontAwesomeIcon icon={faTimes} className="delete-icon" />
      <div className="links">
        <a
          className="short-link"
          href={shortURL}
          target="_blank"
          rel="noopener noreferrer"
        >
          {shortURL}
        </a>
        <p className="long-link">{props.longUrl}</p>
      </div>
      <p className="link-info">times clicked: {props.timesClicked}</p>
    </div>
  );
}

export default LinkComp;
