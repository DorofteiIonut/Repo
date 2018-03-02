import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/css/bootstrap-theme.css";
import { Button } from "react-bootstrap";
import "./styles.css";

class ProgramariForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isNumeClientError: false,
      isPrenumeClientError: false,
      isEmailError: false,
      isTelefonError: false,
      isDataError: false,
      isOraError: false,
      nume: null,
      prenume: null,
      email: "",
      telefon: null,
      data: null,
      ora: null,
    };
  }

  render() {
    return (
      <div className="divContent">
        <form className=" formStyle">
          <label className="labelStyles">
            {" "}
            Nume
            <div className={this.state.isNumeClientError ? "inputError" : ""}>
              <input
                type="username"
                className="form-control"
                placeholder={
                  this.state.isNumeClientError ? "Mesaj de eroare" : ""
                }
                onChange={text =>
                  this.setState({
                    nume: text.target.value,
                    isNumeClientError: false
                  })
                }
              />
            </div>
          </label>

          <label className="labelStyles">
            {" "}
            Prenume
            <div
              className={this.state.isPrenumeClientError ? "inputError" : ""}
            >
              <input
                type="name"
                className="form-control"
                placeholder={
                  this.state.isPrenumeClientError ? "Mesaj de eroare" : ""
                }
                onChange={text =>
                  this.setState({
                    prenume: text.target.value,
                    isPrenumeClientError: false
                  })
                }
              />
            </div>
          </label>

          <label className="labelStyles">
            {" "}
            E-mail
            <div className={this.state.isEmailError ? "inputError" : ""}>
              <input
                type="email"
                value={this.state.email}
                className="form-control"
                placeholder={this.state.isEmailError ? "Invalid email" : "ex: adresamail@email.com"}
                onChange={text =>{
                  this.setState({
                    email: text.target.value,
                    isEmailError: false
                  })
                }}
              />
            </div>
          </label>

          <label className="labelStyles">
            {" "}
            Numar telefon
            <div className={this.state.isTelefonError ? "inputError" : ""}>
              <input
                type="name"
                value={this.state.telefon}
                className="form-control"
                placeholder={this.state.isTelefonError ? "Mesaj de eroare" : ""}
                onChange={text =>
                  this.setState({
                    telefon: text.target.value,
                    isTelefonError: false
                  })
                }
              />
            </div>
          </label>

          <label className="labelStyles">
            {" "}
            Data
            <div className={this.state.isDataError ? "inputError" : ""}>
              <input
                type="name"
                className="form-control"
                placeholder={this.state.isDataError ? "Mesaj de eroare" : "zi.luna.an"}
                onChange={text =>
                  this.setState({
                    data: text.target.value,
                    isDataError: false
                  })
                }
              />
            </div>
          </label>

          <label className="labelStyles">
            {" "}
            Ora programarii
            <div className={this.state.isOraError ? "inputError" : ""}>
              <input
                type="name"
                className="form-control"
                placeholder={this.state.isOraError ? "Mesaj de eroare" : ""}
                onChange={text =>
                  this.setState({
                    ora: text.target.value,
                    isOraError: false
                  })
                }
              />
            </div>
          </label>

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
    if (this.state.nume === null || this.state.nume === "") {
      this.setState({ isNumeClientError: true });
    }

    if (this.state.prenume === null || this.state.prenume === "") {
      this.setState({ isPrenumeClientError: true });
    }

  
    if (this.state.telefon === null || this.state.telefon === "") {
      this.setState({ isTelefonError: true });
    }
    
   

    if (!this.validateEmail(this.state.email)) {
      this.setState({
        email: "",
        isEmailError: true,
      });
    }

    if (this.state.email === null || this.state.email === "") {
      this.setState({ isEmailError: true });
    }

    if (this.state.ora === null || this.state.ora === "") {
      this.setState({ isOraError: true });
    }
    if (this.state.data === null || this.state.data === "") {
      this.setState({ isDataError: true });
    } 

    if(!this.validareData(this.state.data)){
      this.setState({
        data:"",
        isDataError:true,
      });
    }
    
    if(!this.validareTel(this.state.telefon)){
      this.setState({
        telefon:"",
        isTelefonError:true,
        
      });
     
    }

    if (
      this.state.isEmailError ||
      this.state.isDataError ||
      this.state.isNumeClientError
    ) {
      return false;
    } else {
      return true;
    }
  }

  validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }
  validareTel(telefon){
    if(telefon.length !==10 || isNaN(telefon)){
     return false;
    }
    return true;

  }
  validareData(data){
    var re=/^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/|-|\.)(?:0?[1,3-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/
  return re.test(String(data).toLowerCase());
  
  }


  _onLoginPress() {
    try {
      if (!this._validation()) {
        throw new Error("Try again!");
      }
    } catch (error) {
      console.log(error.message);
    }
  }
}

export default ProgramariForm;
