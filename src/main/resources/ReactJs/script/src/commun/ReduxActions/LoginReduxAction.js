import {loginReducer} from "../ReduxReducers/AuthReducer";
import loginConstants from "../Constants";
import loginUrl from "../../Api/Api"; 

export function loginUser(username, password) {
    console.log("-------- "+loginUrl);
    return dispatch => {
      dispatch({ type: loginConstants.LOGIN_IN_PROGRESS})
      try {
        const resp = await fetch(loginUrl, {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            userName: this.state.username,
            password: this.state.password,
          })
        });
        const jS = await resp.json();
        console.log(JSON.stringify(jS));
        if(jS==null){
            throw new Error("Login Error");
        }
        dispatch({ type: loginConstants.LOGIN_SUCCES})
      } catch (err) {
        console.log("Error:" + err.message);
        dispatch({ type: loginConstants.LOGIN_FAILURE,err})
      }
    }
  }
