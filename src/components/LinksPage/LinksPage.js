import React, { useEffect, useState } from "react";
import UserLinks from "../UserLinks/UserLinks";
import "./LinksPage.css";
import { getAllUrls } from "../../utils/api";

function LinksPage() {
  useEffect(() => {
    getAllUrls();
  }, []);

  return (
    <div className="page-container links-page">
      <h2 className="page-title">your links</h2>
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
      <strong>sort by</strong>
      <UserLinks />
    </div>
  );
}

export default LinksPage;
