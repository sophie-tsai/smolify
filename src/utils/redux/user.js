import Cookies from "js-cookie";
import { setSignInCode } from "./statusCodes";
import store from "../redux";

import {
  getUserInfo,
  createUserDoc,
  updateUsernameByID,
  deleteUserByID,
} from "../api";

const userState = {
  username: "",
  userId: "",
};

//log in user
export function logInUser(username) {
  return async (dispatch) => {
    const usernameInfo = await getUserInfo(username);
    if (!usernameInfo) return;
    dispatch({
      type: "LOG_IN_USER",
      payload: {
        username: usernameInfo.user,
        userId: usernameInfo._id,
      },
    });
    Cookies.set("currentUser", `${username}`);
  };
}

//create user account
export function createUserAccount(username) {
  return async (dispatch) => {
    const newUser = await createUserDoc(username);
    if (newUser === 403) {
      return;
    }
    console.log("newuser", newUser);

    dispatch({
      type: "CREATE_USER_ACCOUNT",
      payload: {
        username: newUser.user,
        userId: newUser._id,
      },
    });
    Cookies.set("currentUser", `${username}`);
  };
}

// update username
export function updateUsername(userID, newUsername) {
  return async (dispatch) => {
    await updateUsernameByID(userID, newUsername);
    console.log("updated");
    dispatch({
      type: "UPDATE_USERNAME",
      payload: {
        username: newUsername,
        userId: userID,
      },
    });
  };
}

// delete account
export function deleteUserAccount(userID) {
  return async (dispatch) => {
    await deleteUserByID(userID);
    console.log("deleted user", userID);
    dispatch({
      type: "DELETE_USER",
    });
  };
}

//sign out user account
export function signOutUser() {
  Cookies.remove("user");
  return {
    type: "SIGN_OUT_USER",
  };
}

export default function userReducer(user = userState, action) {
  switch (action.type) {
    case "LOG_IN_USER":
    case "CREATE_USER_ACCOUNT":
    case "UPDATE_USERNAME":
      return {
        ...user,
        ...action.payload,
      };
    case "DELETE_USER":
    case "SIGN_OUT_USER":
      return userState;

    default:
      return user;
  }
}
