import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/css/bootstrap-theme.css";
import { Button } from "react-bootstrap";
import "./styles.css";
import MesajValidare from "../MesajValidare/index";
import { connect } from 'react-redux'
import loginUser from "../../commun/ReduxActions/LoginReduxAction";
import {bindActionCreators} from 'redux'; 
import {withRouter} from 'react-router-dom';

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
          {!this.props.authInfo.inProgress && 
          <Button
            bsStyle="info"
            bsSize="lg"
            className="loginButtonStyle"
            onClick={() => this._onLoginPress()}
          >
            Login
          </Button>
          }
          {this.props.authInfo.inProgress &&
          <div>
          <img src={require("../../assets/Load.gif")} className="styleGif"/>
            </div>}
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

async _onLoginPress() {
    console.log(JSON.stringify(this.props.authInfo));
    try {
      if (!this._validation()) {
        throw new Error("Try again!");
      }
      await this.props.loginUser(this.state.username,this.state.password);
      console.log(JSON.stringify(this.props.authInfo.token));
      if(this.props.authInfo.token!==null){
        this.props.history.push('/medici');
      }
    } catch (error) {
      console.log(error.message);
    }
  }
}

function mapStateToProps(state){
  return {
    authInfo:state.authReducer
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ loginUser:(username,password)=>loginUser(username,password)},dispatch);
}

export default connect(mapStateToProps,mapDispatchToProps) (withRouter(TextFieldGroup))
