import React from "react";
import UserLinks from "./UserLinks/UserLinks";
import "./LinksPage.css";
import { useSelector } from "react-redux";
import NoAccount from "../Account/NoAccount";
import LinkShortener from "./UserLinks/LinkShortener";

function LinksPage() {
  const { userId } = useSelector((state) => state.user);

  return (
    <div className="page-container links-page">
      <h2 className="page-title">your links</h2>
      {userId ? (
        <>
          <LinkShortener />
          <UserLinks />
        </>
      ) : (
        <NoAccount />
      )}
    </div>
  );
}

export default LinksPage;
