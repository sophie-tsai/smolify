import React from "react";
import { Link } from "react-router-dom";

import "./Header.css";

function Header() {
  return (
    <div className="header-container">
      <h2 className="title">
        <Link to="/">smolify </Link>
      </h2>

      <p className="header-item">
        <Link to="/links">links </Link>
      </p>

      <p className="header-item">
        <Link to="/account">account</Link>
      </p>
    </div>
  );
}

export default Header;
