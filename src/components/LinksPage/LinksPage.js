import React, { useState } from "react";
import UserLinks from "../UserLinks/UserLinks";
import "./LinksPage.css";
import { useSelector, useDispatch } from "react-redux";
import NoAccount from "../Account/NoAccount";
import { addLink } from "../../utils/redux/links";

function LinksPage() {
  const { userId } = useSelector((state) => state.user);
  const [linkInput, setLinkInput] = useState("");
  const dispatch = useDispatch();

  const handleChange = (event) => {
    const { value } = event.target;
    setLinkInput(value);
  };

  const handleAdd = () => {
    dispatch(addLink(linkInput, userId));
  };

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
                value={linkInput}
                onChange={handleChange}
              ></input>
            </div>
            <button className="button shorten-link-button" onClick={handleAdd}>
              shorten
            </button>
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
