import axios from "axios";
import { setSignUpCode, setLogInCode } from "./redux/statusCodes";
import store from "./redux";
const BASE_URL = "http://localhost:5000";

// get all urls in database
const getAllUrls = async () => {
  try {
    const res = await axios.get(`${BASE_URL}/urls`);
    const allUrls = res.data;

    console.log(allUrls);
    return allUrls;
  } catch (error) {
    console.error(error);
  }
};

// get user info by username
const getUserInfo = async (username, initialLogIn) => {
  try {
    const res = await axios.get(`${BASE_URL}/users/${username}`);
    const usernameInfo = res.data;

    if (!usernameInfo[0]) {
      if (initialLogIn) return;
      store.dispatch(setLogInCode(404));
      return;
    }
    store.dispatch(setLogInCode(200));
    return usernameInfo[0];
  } catch (error) {
    console.error(error);
  }
};

// create user document
const createUserDoc = async (username) => {
  try {
    const res = await axios.post(`${BASE_URL}/users`, {
      user: {
        user: username,
      },
    });
    const newUser = res.data;
    store.dispatch(setSignUpCode(200));
    return newUser;
  } catch (error) {
    store.dispatch(setSignUpCode(error.response.status));

    return error.response.status;
  }
};

// delete user by ID
const deleteUserByID = async (userID) => {
  try {
    const res = await axios.delete(`${BASE_URL}/users/${userID}`);
    console.log(res);
  } catch (error) {
    console.error(error);
  }
};

// update username given ID
const updateUsernameByID = async (userID, newUsername) => {
  try {
    const res = await axios.put(`${BASE_URL}/users/${userID}`, {
      updatedUser: newUsername,
    });
    console.log(res);
  } catch (error) {
    console.error(error);
  }
};

export {
  getAllUrls,
  getUserInfo,
  createUserDoc,
  deleteUserByID,
  updateUsernameByID,
};
