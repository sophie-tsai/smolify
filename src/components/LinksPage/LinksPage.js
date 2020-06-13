import React from "react";
import UserLinks from "../UserLinks/UserLinks";
import "./LinksPage.css";

import { useSelector } from "react-redux";
import NoAccount from "../Account/NoAccount";

function LinksPage() {
  const { userId } = useSelector((state) => state.user);

  return (
    <div className="page-container links-page">
      <h2 className="page-title">your links</h2>
      {userId ? (
        <>
          <form className="shorten-link-form">
            <div className="input shorten-link-input-div">
              <span>https://</span>
              <input
                type="text"
                className="shorten-link-input"
                placeholder="www..."
              ></input>
            </div>
            <button className="button shorten-link-button">shorten</button>
          </form>

          <UserLinks />
        </>
      ) : (
        <NoAccount />
      )}
    </div>
  );
}

export default LinksPage;
