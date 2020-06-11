import { combineReducers, createStore, applyMiddleware } from "redux";

import thunk from "redux-thunk";
import userReducer from "./user";
import statusCodeReducer from "./statusCodes";

const rootReducer = combineReducers({
  user: userReducer,
  statusCodes: statusCodeReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));
store.subscribe(() => console.log("global state", store.getState()));

export default store;
