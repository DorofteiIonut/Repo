import { combineReducers } from "redux";
import authReducer from "./ReduxReducers/AuthReducer";
import specializariReducer from "./ReduxReducers/SpecializariReducer";
import listaMediciBySpecializare from "./ReduxReducers/ListaMediciBySpecializareReducer";
import ProfilMedic from "./ReduxReducers/ProfilMedicReducers";
import Servicii from "./ReduxReducers/ServiciiReducer";

export default combineReducers({
    authReducer:authReducer,
    specializareReducer:specializariReducer,
    listaMediciBySpecializare:listaMediciBySpecializare,
    profilMedic:ProfilMedic,
    serviciiMedic:Servicii,
  });