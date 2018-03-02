import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/css/bootstrap-theme.css";
import { Button } from "react-bootstrap";
import "./styles.css";
import MesajValidare from "../MesajValidare/index";

class TextFieldGroup extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isUsernameError:false,
      isPassError:false,
      username: null,
      password: null
    };
  }

  render() {
    return (
      <div className="formContainerDiv">
        <form>
          <div className="form-group">
            <div className="textWarningDiv">
              <label> Username  </label>
              {this.state.isUsernameError && <MesajValidare mesaj={"Username invalid"}/>}
            </div>
            <input
              type="username"
              className="form-control"
              placeholder="Username"
              onChange={text =>
                this.setState({
                  username: text.target.value, isUsernameError:false
                })
              }
            />
          </div>
          <div className="form-group">
          <div className="textWarningDiv">
            <label>Password</label>
            {this.state.isPassError && <MesajValidare mesaj={"Password invalid"}/>}
            </div>
            <input
              type="password"
              className="form-control"
              placeholder="Password"
              onChange={text =>
                this.setState({
                  password: text.target.value, isPassError:false
                })
              }
            />
          </div>
          <Button
            bsStyle="info"
            bsSize="lg"
            className="loginButtonStyle"
            onClick={() => this._onLoginPress()}
          >
            Login
          </Button>
        </form>
      </div>
    );
  }

  _validation() {
    if(this.state.username ===null || this.state.username===""){
      this.setState({isUsernameError:true}) 
  }
    if(this.state.password===null || this.state.password===""){
    this.setState({isPassError:true})
  }
    if(this.state.isPassError || this.state.isUsernameError){
      return false;
    }else{ 
    return true;
    }
  }

  _onLoginPress() {
    try {
      if (!this._validation()) {
        throw new Error("Try again!");
      }
      this._callApi();
    } catch (error) {
      console.log(error.message);
    }
  }

  async _callApi() {
    const url = "http://localhost:8080/login";

    try {
      const resp = await fetch(url, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          userName: this.state.username,
          password: this.state.password,
          role: ""
        })
      });
      const jS = await resp.json();
      console.log(JSON.stringify(jS));
    } catch (err) {
      console.log("Error:" + err.message);
    }
  }
}

export default TextFieldGroup;
