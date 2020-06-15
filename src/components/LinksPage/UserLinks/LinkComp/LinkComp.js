import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import "./LinkComp.css";
import { useDispatch } from "react-redux";
import { deleteLink } from "../../../../utils/redux/links";

function LinkComp(props) {
  const BASE_URL = "http://localhost:5000";
  const shortURL = `${BASE_URL}/${props.token}`;
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteLink(props.id));
  };

  return (
    <div className="link-div">
      <FontAwesomeIcon
        icon={faTimes}
        onClick={handleDelete}
        className="delete-icon"
      />
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
      <p className="link-info">{props.timesClicked}x</p>
    </div>
  );
}

export default LinkComp;
