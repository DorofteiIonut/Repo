import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/css/bootstrap-theme.css";
import { Button } from "react-bootstrap";
import "./styles.css";
import MesajValidare from "../../componente/MesajValidare/index";

class SignUpForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isUsernameError:false,
      isPassError:false,
      isEmailError:false,
      username: null,
      password: null,
      email:null
    };
  }

  render() {
    return (
      <div className="formSignupContainerDiv">
        <form>
          <div className="form-group">
            <div className="textWarningDiv">
              <label> Username </label>
               {this.state. isUsernameError && <MesajValidare mesaj={"Username invalid"} />}
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
              <label> E-mail</label>
              {this.state.isEmailError &&<MesajValidare mesaj={"E-mail invalid"} />}
            </div>
            <input
              type="email"
              className="form-control"
              placeholder="E-mail"
              onChange={text =>
                this.setState({
                  username: text.target.value, isEmailError:false
                })
              }
            />
          </div>


          <div className="form-group">
            <div className="textWarningDiv">
              <label> Parola </label>
              {this.state. isPassError && <MesajValidare mesaj={"Intorduceti parola"} />}
            </div>
            <input
              type="password"
              className="form-control"
              placeholder="Password"
              onChange={text =>
                this.setState({
                  username: text.target.value, isPassError:false
                })
              }
            />
          </div>


          <div className="form-group">
            <div className="textWarningDiv">
              <label> Confirmare parola </label>
              {this.state. isPassError && <MesajValidare mesaj={"Parola gresita"} />}
            </div>
            <input
              type="password"
              className="form-control"
              placeholder="Password"
              onChange={text =>
                this.setState({
                  username: text.target.value, isPassError:false
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
            SignUp
          </Button>
        </form>
      </div>
    );
  }

  _validation() {
    if(this.state.username ==null || this.state.username==""){
      this.setState({isUsernameError:true})
      if(this.state.password==null || this.state.password==""){
        this.setState({isPassError:true})
        if(this.state.email==null || this.state.email==""){
          this.setState({isEmailError:true})
        }
      return false;
    }
  }
    return true;
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
}
export default SignUpForm;
