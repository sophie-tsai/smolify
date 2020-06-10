import axios from "axios";

const userState = {
  username: "",
  userId: "",
};

export function setUsername(username) {
  return async (dispatch) => {
    const BASE_URL = "http://localhost:5000";
    try {
      const res = await axios.get(`${BASE_URL}/users/${username}`);
      const usernameInfo = res.data;
      console.log(usernameInfo[0]);

      dispatch({
        type: "SET_USERNAME",
        payload: {
          username: usernameInfo[0].user,
          userId: usernameInfo[0]._id,
        },
      });
    } catch (error) {
      console.error(error);
    }
  };
}

export default function userReducer(user = userState, action) {
  switch (action.type) {
    case "SET_USERNAME":
      return {
        ...userState,
        ...action.payload,
      };
    default:
      return user;
  }
}
