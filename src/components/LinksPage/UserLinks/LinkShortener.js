import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addLink } from "../../../utils/redux/links";

function LinkShortener() {
  const { userId } = useSelector((state) => state.user);
  const [linkInput, setLinkInput] = useState("");
  const dispatch = useDispatch();

  const handleChange = (event) => {
    const { value } = event.target;
    setLinkInput(value);
  };

  const handleAdd = (e) => {
    e.preventDefault();
    dispatch(addLink(linkInput, userId));
    setLinkInput("");
  };

  return (
    <form className="shorten-link-form">
      <div className="input shorten-link-input-div">
        <span className="https">https://</span>
        <input
          type="text"
          className="shorten-link-input"
          placeholder="www..."
          value={linkInput}
          onChange={handleChange}
        ></input>
      </div>
      <button className="shorten-link-button" onClick={handleAdd}>
        shorten
      </button>
    </form>
  );
}

export default LinkShortener;
