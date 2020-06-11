import { combineReducers, createStore, applyMiddleware } from "redux";
import {
  signInUser,
  createUserAccount,
  updateUsername,
  deleteUserAccount,
} from "./user";
import thunk from "redux-thunk";
import userReducer from "./user";

const rootReducer = combineReducers({ user: userReducer });

const store = createStore(rootReducer, applyMiddleware(thunk));
store.subscribe(() => console.log("global state", store.getState()));

store.dispatch(signInUser("ryan"));

export default store;
