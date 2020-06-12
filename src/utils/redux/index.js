import { combineReducers, createStore, applyMiddleware } from "redux";

import thunk from "redux-thunk";
import userReducer from "./user";
import statusCodeReducer from "./statusCodes";
import linksReducer from "./links";

const rootReducer = combineReducers({
  user: userReducer,
  links: linksReducer,
  statusCodes: statusCodeReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));
store.subscribe(() => console.log("global state", store.getState()));

export default store;
