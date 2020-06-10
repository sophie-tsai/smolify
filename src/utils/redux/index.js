import { combineReducers, createStore, applyMiddleware } from "redux";
import { setUsername } from "./user";
import thunk from "redux-thunk";
import userReducer from "./user";

// const rootReducer = combineReducers(userReducer);

const store = createStore(userReducer, applyMiddleware(thunk));
store.subscribe(() => console.log(store.getState()));

store.dispatch(setUsername("waffles"));

export default store;
