import React from "react";
import LinkComp from "./LinkComp/LinkComp";
import { useSelector } from "react-redux";
import "./UserLinks.css";

function UserLinks() {
  const { userLinks } = useSelector((state) => state.links);
  // console.log(userLinks);
  const displayLinks = userLinks.map((link) => (
    <LinkComp
      key={link._id}
      longUrl={link.longUrl}
      token={link.token}
      timesClicked={link.timesUsed}
    />
  ));

  return <div className="all-links">{displayLinks}</div>;
}

export default UserLinks;
