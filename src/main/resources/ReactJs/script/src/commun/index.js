import { combineReducers } from "redux";
import authReducer from "./ReduxReducers/AuthReducer";

export default combineReducers({
    authReducer:authReducer,
  });