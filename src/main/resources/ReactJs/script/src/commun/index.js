import { combineReducers } from "redux";
import authReducer from "./ReduxReducers/AuthReducer";
import specializariReducer from "./ReduxReducers/SpecializariReducer";
import listaMediciBySpecializare from "./ReduxReducers/ListaMediciBySpecializareReducer"

export default combineReducers({
    authReducer:authReducer,
    specializareReducer:specializariReducer,
    listaMediciBySpecializare:listaMediciBySpecializare
  });