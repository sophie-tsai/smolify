import React from "react";
import { Link } from "react-router-dom";

function NoAccount() {
  return (
    <p>
      <Link to="/signup" className="cta-link">
        sign up
      </Link>{" "}
      or{" "}
      <Link to="/login" className="cta-link">
        log in
      </Link>{" "}
      to get started
    </p>
  );
}

export default NoAccount;
