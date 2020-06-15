import React, { useEffect } from "react";
import LandingPage from "./components/LandingPage/LandingPage";
import Header from "./components/Header/Header";
import SignUpPage from "./components/SignUpPage/SignUpPage";
import LinksPage from "./components/LinksPage/LinksPage";
import Account from "./components/Account/Account";
import LogIn from "./components/LogIn/LogIn";
import Signature from "./components/Signature/Signature";
import { Switch, Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logInUser } from "./utils/redux/user";
import { getUserLinks } from "./utils/redux/links";
import Cookies from "js-cookie";
import "./App.css";

function App() {
  const dispatch = useDispatch();
  const { userId } = useSelector((state) => state.user);

  // if there are cookies of an existing user, then try to log them in
  useEffect(() => {
    if (Cookies.get("currentUser")) {
      dispatch(logInUser(Cookies.get("currentUser"), true));
      return;
    }
  }, []);

  useEffect(() => {
    dispatch(getUserLinks(userId));
  }, [userId]);

  return (
    <div className="app-container">
      <Header style={{ flexGrow: 0 }} />
      <Switch>
        <Route exact path="/smolify">
          <LandingPage />
        </Route>
        <Route exact path="/signup">
          <SignUpPage />
        </Route>
        <Route exact path="/links">
          <LinksPage style={{ flexGrow: 1 }} />
        </Route>
        <Route exact path="/account">
          <Account />
        </Route>
        <Route exact path="/login">
          <LogIn />
        </Route>
      </Switch>

      <Signature />
    </div>
  );
}

export default App;
