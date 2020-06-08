import React from "react";
import { Link } from "react-router-dom";
import "./LandingPage.css";

function LandingPage() {
  return (
    <div className="page-container landing-page">
      <h1 className="landing-tagline">
        shorten, manage, and track your links!
      </h1>
      <button className="button button-primary">
        <Link to="/signup">get started</Link>
      </button>
    </div>
  );
}

export default LandingPage;
