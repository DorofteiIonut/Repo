import { combineReducers } from "redux";
import authReducer from "./ReduxReducers/AuthReducer";
import specializariReducer from "./ReduxReducers/SpecializariReducer"

export default combineReducers({
    authReducer:authReducer,
    specializareReducer:specializariReducer
  });