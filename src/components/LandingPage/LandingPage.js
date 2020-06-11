import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { signInUser } from "../../utils/redux/user";
import Cookies from "js-cookie";
import { Link } from "react-router-dom";
import "./LandingPage.css";

function LandingPage() {
  const dispatch = useDispatch();
  useEffect(() => {
    if (Cookies.get("currentUser")) {
      dispatch(signInUser(Cookies.get("currentUser")));
    }
  }, []);

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
