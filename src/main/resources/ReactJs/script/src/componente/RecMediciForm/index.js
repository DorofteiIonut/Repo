import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/css/bootstrap-theme.css";
import { Button, Label } from "react-bootstrap";
import "./styles.css";
import MesajValidare from "../../componente/MesajValidare/index";

class RecMediciForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isNumeError: false,
      isPrenumeError: false,
      isAdresaError: false,
      isEmailError: false,
      isNrtelError: false,
      isSpecializare: false,

      nume: null,
      prenume: null,
      adresa: null,
      email: null,
      nr: null,
      specializare: null,
      emailErrMsg:"Invalid"
    };
  }

  render() {
    return (
      <div className="divContent">
        <form className=" formStyle">
          <label className="labelStyles">
            Nume:
            <div className={this.state.isNumeError? "inputError": ""}>
            <input
              class="form-control"
              type="text"
              name="name"
              placeholder={this.state.isNumeError? "Mesaj de eroare": ""}
              onChange={text =>
                this.setState({
                  nume: text.target.value,
                  isNumeError: false
                })
              }
            />
            </div>
           
          </label>

          <label className="labelStyles">
            Prenume:
            <div className={this.state.isPrenumeError? "inputError": ""}>
            <input
              class="form-control"
              type="text"
              name="prenume"
              placeholder={this.state.isPrenumeError? "Mesaj de eroare": ""}
              onChange={text =>
                this.setState({
                  prenume: text.target.value,
                  isPrenumeError: false
                })
              }
            />
            </div>
          </label>

          <br />
          <label className="labelStyles">
            Adresa:
            <div className={this.state.isAdresaError? "inputError": ""}>
            <input
              class="form-control"
              type="text"
              name="adresa"
              placeholder={this.state.isAdresaError? "Mesaj de eroare": ""}
              onChange={text =>
                this.setState({
                  adresa: text.target.value,
                  isAdresaError: false
                })
              }
            />
            </div>
             
          </label>

          <label className="labelStyles">
            E-mail:
            <div className={this.state.isEmailError? "inputError": ""}>
            <input
              class="form-control"
              type="e-mail"
              name="email"
              placeholder={this.state.isEmailError? "Mesaj de eroare": ""}
              onChange={text =>
                this.setState({
                  email: text.target.value,
                  isEmailError: false
                })
              }
            />
             </div>
          </label>

          <label className="labelStyles">
            Nr. telefon:
            <div className={this.state.isNrtelError? "inputError": ""}>

            <input 
              class="form-control"
              type="text"
              name="telefon"
              placeholder={this.state.isNrtelError? "Mesaj de eroare": ""}
              onChange={text =>
                this.setState({
                  nr: text.target.value,
                  isNrtelError: false
                })
              }
            />
            </div>
            
          </label>

          <br />
          <label className="labelStyles">
            Specializare:
            
            <select className="specializariStyle">
              <option>pediatru</option>
              <option>chirurg</option>
              <option>dentist</option>
              <option>4</option>

              onChange={text =>
                this.setState({
                  specializare: text.target.value,
                  isSpecializare: false
                })
              }
      </select>
      
          </label>
          

          <label className="labelStyles">
            Denumire cabinet:
            <input class="form-control" type="text" name="denumirecab" />
          </label>
          <br />

          <Button
            bsStyle=""
            bsSize="lg"
            className="btnStyle"
            onClick={() => this._onLoginPress()}
          >
            Save
          </Button>
        </form>
      </div>
    );
  }
  _validation() {
    if (this.state.nume == null || this.state.nume == "") {
      this.setState({ isNumeError: true });
    }

    if (this.state.prenume == null || this.state.prenume == "") {
      this.setState({ isPrenumeError: true });
    }

    if (this.state.adresa == null || this.state.adresa == "") {
      this.setState({ isAdresaError: true });
    }
    if(!this.validateEmail(this.state.email)){
      this.setState({isEmailError:true, emailErrMsg:"Email invalid"})
    }

    if (this.state.email == null || this.state.email == "") {
      this.setState({ isEmailError: true, emailErrMsg:"Introduceti adresa de mail"});
    }

    if (this.state.nr == null || this.state.nr == "") {
      this.setState({ isNrtelError: true });
    }

    if (this.state.specializare == null || this.state.specializare == "") {
      this.setState({ isSpecializare: true });
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

  validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}
}
export default RecMediciForm;
