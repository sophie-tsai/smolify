import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./LandingPage.css";

function LandingPage() {
  const isSignedIn = useSelector((state) => state.user.username);

  return (
    <div className="page-container landing-page">
      <h1 className="landing-tagline">
        shorten, manage, and track your links!
      </h1>
      {isSignedIn ? (
        <button className="button button-primary">
          <Link to="/links">manage links</Link>
        </button>
      ) : (
        <button className="button button-primary">
          <Link to="/signup">get started</Link>
        </button>
      )}
    </div>
  );
}

export default LandingPage;
