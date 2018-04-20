import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/css/bootstrap-theme.css";
import { Button } from "react-bootstrap";
import "./styles.css";
import MesajValidare from "../../componente/MesajValidare/index";
import signUpUrl from "../../Api/Api";

class SignUpForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isUsernameError:false,
      isPassError:false,
      isEmailError:false,
      isConfirmPassError: false,
      username: null,
      password: null,
      email:null,
      confpassword:null,
      passErrorMsg:"Camp invalid",
      confpassErrMsg:"Camp invalid",
      emailErrMsg:"Camp invalid",
      userErrMsg:"Introduceti numele de utilizator",
      signUpError:false,
      signUpSuccess:false,
    };
  }

  render() {
    if(this.state.signUpSuccess){
      return(
          <div className="divSuccess" >
               <h className="stilSucces1">Felicitari! </h><br></br>
               <h className="stilSucces2">Esti inregistrat ca utilizator!</h><br></br>
               <h className="stilSucces3">Iti multumim!:)</h>

              </div>
      )
  }
    return (
      <div className="formSignupContainerDiv">
      <h className="titleStyles"> Sign Up</h>
      {this.state.signUpError&&(
      <p className="stilEroare">Inregistrarea nu s-a efectuat</p>)
      }
        <form>
          <div className="form-group">
            <div className="textWarningDiv">
              <label> Username </label>
               {this.state.isUsernameError && <MesajValidare mesaj={this.state.userErrMsg} />}
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
              {this.state.isEmailError &&<MesajValidare mesaj={this.state.emailErrMsg} />}
            </div>
            <input
              type="email"
              className="form-control"
              placeholder="E-mail"
              onChange={text =>
                this.setState({
                 email: text.target.value, isEmailError:false
                })
              }
            />
          </div>


          <div className="form-group">
            <div className="textWarningDiv">
              <label> Parola </label>
              {this.state.isPassError && <MesajValidare mesaj={this.state.passErrorMsg} />}
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


          <div className="form-group">
            <div className="textWarningDiv">
              <label> Confirmare parola </label>
              {this.state.isConfirmPassError && <MesajValidare mesaj={this.state.confpassErrMsg} />}
            </div>
            <input
              type="password"
              className="form-control"
              placeholder="Password"
              onChange={text =>
                this.setState({
                 confpassword: text.target.value, isConfirmPassError:false
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
    
    if(this.state.username ===null || this.state.username===""){
      this.setState({isUsernameError:true, })
    }

      if(this.state.password===null || this.state.password===""){
        this.setState({isPassError:true, passErrorMsg:"Introduceti parola"})
      }

      if( this.state.confpassword===null || this.state.confpassword===""){
        this.setState({isConfirmPassError:true})
      }
      
      if(!this.validateEmail(this.state.email)){
         this.setState({isEmailError:true, emailErrMsg:"Email invalid"})
       }

        if(this.state.email===null || this.state.email===""){
          this.setState({isEmailError:true, emailErrMsg:"Introduceti adresa de email"})
        }

        if(this.state.password!==this.state.confpassword){
          this.setState({isConfirmPassError:true,
          confpassErrMsg:"Verificati parola de confirmare!"})
        }

        if(this.state.isEmailError || this.state.isPassError || this.state.isUsernameError){
      return false;
        }else{
      return true;
        }
  }

  
   validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
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
 async _callApi(){
    try {
      const resp = await fetch(signUpUrl.signUpUrl, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          username:this.state.username,
          password:this.state.password,
          email:this.state.email,
        })
      });
      
      if(resp.status!==200){
          throw new Error("signup error");
      }
      this.setState({
        signUpSuccess:true
      })
      
    } catch (err) {
      console.log("Error --:" + err.message);
      this.setState({
        signUpError:true
      })
    }
  }
}
export default SignUpForm;
