import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/css/bootstrap-theme.css";
import { Button } from "react-bootstrap";
import "./styles.css";
import MesajValidare from "../../componente/MesajValidare/index";

class ProgramariForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isNumeClientError:false,
      isPrenumeClientError:false,
      isCNPError:false,
      isSpecializareError: false,
      isMedicError: false,
      isCabinetError: false,
      isOraError: false,
      nume:null,
      prenume:null,
      CNP: null,
      specializare:null,
      numeMed:null,
      numeCab:null,
      ora:null,
    };
  }

  render() {
    return (
      <div className="formProgramariContainerDiv">
        <form>
          <div className="form-group">
            <div className="textWarningDiv">
              <label> Nume </label>
               {this.state. isNumeClientError && <MesajValidare mesaj={"Introduceti numele dumneavoastra"} />}
            </div>
            <input
              type="username"
              className="form-control"
              placeholder="Nume"
              onChange={text =>
                this.setState({
                  nume: text.target.value, isNumeClientError:false
                })
              }
            />
          </div>


          <div className="form-group">
            <div className="textWarningDiv">
              <label> Prenume</label>
              {this.state.isPrenumeClientError &&<MesajValidare mesaj={"Introduceti prenumele dumneavoastra"} />}
            </div>
            <input
              type="name"
              className="form-control"
              placeholder="Prenume"
              onChange={text =>
                this.setState({
                 prenume: text.target.value, isPrenumeClientError:false
                })
              }
            />
          </div>


          <div className="form-group">
            <div className="textWarningDiv">
              <label> CNP </label>
              {this.state. isCNPError && <MesajValidare mesaj={"CNP"} />}
            </div>
            <input
              type="name"
              className="form-control"
              placeholder="CNP"
              onChange={text =>
                this.setState({
                  CNP: text.target.value, isCNPError:false
                })
              }
            />
          </div>


          <div className="form-group">
            <div className="textWarningDiv">
              <label> Specializarea </label>
              {this.state.isSpecializareError && <MesajValidare mesaj={"Alege specializarea la care vrei programare"} />}
            </div>
            <input
              type="name"
              className="form-control"
              placeholder="Specializarea"
              onChange={text =>
                this.setState({
                 specializare: text.target.value, isSpecializareError:false
                })
              }
            />
          </div>

          <div className="form-group">
            <div className="textWarningDiv">
              <label> Medic </label>
              {this.state.isMedicError && <MesajValidare mesaj={"Medic"} />}
            </div>
            <input
              type="name"
              className="form-control"
              placeholder="Medic"
              onChange={text =>
                this.setState({
                 numeMed: text.target.value, isMedicError:false
                })
              }
            />
          </div>

          <div className="form-group">
            <div className="textWarningDiv">
              <label> Cabinetul </label>
              {this.state.isCabinetError && <MesajValidare mesaj={"Alege cabinetul"} />}
            </div>
            <input
              type="name"
              className="form-control"
              placeholder="Cabinet"
              onChange={text =>
                this.setState({
                 numeCab: text.target.value, isCabinetError:false
                })
              }
            />
          </div>

          <div className="form-group">
            <div className="textWarningDiv">
              <label> Ora programarii </label>
              {this.state.isOraError && <MesajValidare mesaj={"Alege ora programarii"} />}
            </div>
            <input
              type="name"
              className="form-control"
              placeholder="Ora"
              onChange={text =>
                this.setState({
                 ora: text.target.value, isOraError:false
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
            Trimite
          </Button>
        </form>
      </div>
    );
  }

  _validation() {
    
    if(this.state.nume ==null || this.state.nume==""){
      this.setState({isNumeClientError:true, })
    }

      if(this.state.prenume==null || this.state.prenume==""){
        this.setState({isPrenumeClientError:true})
      }

      if( this.state.CNP==null || this.state.CNP==""){
        this.setState({isCNPError:true})
      }
      
      if(!this.validateEmail(this.state.email)){
         this.setState({isEmailError:true, emailErrMsg:"Email invalid"})
       }

        if(this.state.email==null || this.state.email==""){
          this.setState({isEmailError:true, emailErrMsg:"Introduceti adresa de email"})
        }

        if(this.state.isEmailError || this.state.isPassError || this.state.isUsernameError){
      return false;
        }else{
      return true;
        }
  }

  
//    validateEmail(email) {
//     var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//     return re.test(String(email).toLowerCase());
// }

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

export default ProgramariForm;
