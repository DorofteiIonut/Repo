import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/css/bootstrap-theme.css";
import { Button } from "react-bootstrap";
import "./styles.css";
import MesajValidare from "../../componente/MesajValidare/index";

class SignUpForm extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="formSignupContainerDiv">
        <form>
          <div className="form-group">
            <div className="textWarningDiv">
              <label> Username </label>
                <MesajValidare mesaj={"Username invalid"} />
            </div>
            <input
              type="username"
              className="form-control"
              placeholder="Username"
            />
          </div>
          <div className="form-group">
            <div className="textWarningDiv">
              <label> Username </label>
                <MesajValidare mesaj={"Username invalid"} />
            </div>
            <input
              type="username"
              className="form-control"
              placeholder="Username"
            />
          </div>
          <div className="form-group">
            <div className="textWarningDiv">
              <label> Username </label>
                <MesajValidare mesaj={"Username invalid"} />
            </div>
            <input
              type="username"
              className="form-control"
              placeholder="Username"
            />
          </div>
          <div className="form-group">
            <div className="textWarningDiv">
              <label> Username </label>
                <MesajValidare mesaj={"Username invalid"} />
            </div>
            <input
              type="username"
              className="form-control"
              placeholder="Username"
            />
          </div>
          <Button bsStyle="info" bsSize="lg" className="loginButtonStyle">
            Sign Up
          </Button>
        </form>
      </div>
    );
  }
}
export default SignUpForm;
