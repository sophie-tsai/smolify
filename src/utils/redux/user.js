import Cookies from "js-cookie";

import {
  getUserInfo,
  createUserDoc,
  updateUsernameByID,
  deleteUserByID,
} from "../api";
import store from ".";

const userState = {
  username: "",
  userId: "",
};

//log in user
export function logInUser(username, initialLogIn) {
  return async (dispatch) => {
    const usernameInfo = await getUserInfo(username, initialLogIn);
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
    Cookies.set("currentUser", `${newUsername}`);
  };
}

// delete account
export function deleteUserAccount(userID) {
  return async (dispatch) => {
    await deleteUserByID(userID);
    console.log("deleted user", userID);
    Cookies.remove("currentUser");
    dispatch({
      type: "DELETE_USER",
    });
  };
}

//sign out user account
export function logOutUser() {
  Cookies.remove("currentUser");
  return {
    type: "LOG_OUT_USER",
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
    case "LOG_OUT_USER":
      return userState;

    default:
      return user;
  }
}
