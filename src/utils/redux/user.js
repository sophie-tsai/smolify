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

//sign in user
export function signInUser(username) {
  return async (dispatch) => {
    const usernameInfo = await getUserInfo(username);
    dispatch({
      type: "SIGN_IN_USER",
      payload: {
        username: usernameInfo.user,
        userId: usernameInfo._id,
      },
    });
  };
}

// create user account
export function createUserAccount(username) {
  return async (dispatch) => {
    const newUser = await createUserDoc(username);
    console.log(newUser);
    dispatch({
      type: "CREATE_USER_ACCOUNT",
      payload: {
        username: newUser.user,
        userId: newUser._id,
      },
    });
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

export default function userReducer(user = userState, action) {
  switch (action.type) {
    case "SIGN_IN_USER":
    case "CREATE_USER_ACCOUNT":
    case "UPDATE_USERNAME":
      return {
        ...user,
        ...action.payload,
      };
    case "DELETE_USER":
      return userState;
    default:
      return user;
  }
}
