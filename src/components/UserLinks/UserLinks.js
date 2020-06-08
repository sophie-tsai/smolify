import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import LinkComp from "./LinkComp/LinkComp";
import "./UserLinks.css";

function UserLinks() {
  return (
    <div className="all-links">
      <LinkComp />
      <LinkComp />
      <LinkComp />
      <LinkComp />
      <LinkComp />
      <LinkComp />
      <LinkComp />
      <LinkComp />
    </div>
  );
}

export default UserLinks;
