import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/css/bootstrap-theme.css";
import "./styles.css";
import Button from "material-ui/Button";
import Dialog, {
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle
} from "material-ui/Dialog";
import Slide from "material-ui/transitions/Slide";
import { withRouter } from "react-router-dom";
import Calendar from "react-calendar";
import Select from 'material-ui/Select';
import { MenuItem } from 'material-ui/Menu';

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
      programareError: false,
      programareSuccess: false,
      open:false,
      age:"",
    };
  }
  handleClose = () => {
    this.setState({ signUpSuccess: false });
    this.props.history.push("/");
  };
  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleCloser = () => {
    this.setState({ open: false });
  };

  handleOpen = () => {
    this.setState({ open: true });
  };

  render() {
    if (this.state.programareSuccess) {
      return (
        <div>
          <Dialog
            open={this.state.programareSuccess}
            transition={Transition}
            keepMounted
            onClose={this.handleClose}
            aria-labelledby="alert-dialog-slide-title"
            aria-describedby="alert-dialog-slide-description"
          >
            <DialogTitle id="alert-dialog-slide-title">
              {"Felicitari!"}
            </DialogTitle>
            <DialogContent>
              <DialogContentText id="alert-dialog-slide-description">
                Programarea dumneavoastra s-a inregistrat! Va multumesc!
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button onClick={this.handleClose} color="primary">
                Continua
              </Button>
            </DialogActions>
          </Dialog>
        </div>
      );
    }
    if (this.state.data === null) {
      return (
        <div className="calendar">
          <Calendar
            onClickDay={(data)=>{console.log(data.getDate()+"/"+(data.getMonth()+1));
            this.setState({
              data:data.getDate()+"/"+(data.getMonth()+1)
            })
          }}
            tileDisabled={(date)=>disableDates(date)}
            onChange={() => console.log("Calendar")}
            value={this.state.data}
          />
        </div>
      );
    }
    return (
      <div className="divContent">
        {this.state.programareError && <p>Inregistrarea nu s-a efectuat</p>}
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
                placeholder={
                  this.state.isEmailError
                    ? "Invalid email"
                    : "ex: adresamail@email.com"
                }
                onChange={text => {
                  this.setState({
                    email: text.target.value,
                    isEmailError: false
                  });
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

          
            {" "}
            
            <div className={this.state.isOraError ? "inputError" : ""}>
            <div className="divH">
            <h className={"h"}> Ora programarii</h>
            </div>
            <div  className="divSelect">
            <Select
             open={this.state.open}
            onClose={this.handleCloser}
            onOpen={this.handleOpen}
            value={this.state.age}
            onChange={this.handleChange}
            inputProps={{
              name: 'age',
              id: 'controlled-open-select',
            }}
          >
          <div  className="select">
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={10}>10:30</MenuItem>
            <MenuItem value={20}>11:00</MenuItem>
            <MenuItem value={30}>11:30</MenuItem>
            <MenuItem value={40}>12:00</MenuItem>
            <MenuItem value={50}>12:30</MenuItem>
            <MenuItem value={60}>13:00</MenuItem>
            </div>
          </Select>
          </div>
            </div>
          
            <div  className="btnStyle">
          <Button
           size="large"
            style={{fontSize:15 }}
           
            color="green"
            onClick={() => this._onSavePress()}
          >
            Save
          </Button>
          </div>
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
        isEmailError: true
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

    if (!this.validareData(this.state.data)) {
      this.setState({
        data: "",
        isDataError: true
      });
    }

    if (!this.validareTel(this.state.telefon)) {
      this.setState({
        telefon: "",
        isTelefonError: true
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
  validareTel(telefon) {
    if (telefon.length !== 10 || isNaN(telefon)) {
      return false;
    }
    return true;
  }
  validareData(data) {
    var re = /^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/|-|\.)(?:0?[1,3-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/;
    return re.test(String(data).toLowerCase());
  }

  _onSavePress() {
    try {
      if (this._validation()) {
        this._callApi();
        //Call Api

        //if status ==200 afiseaza Succes

        //else throw new Error
      }
    } catch (error) {
      console.log(error.message);
      //setam stateul de eroare
    }
  }
}

function Transition(props) {
  return <Slide direction="up" {...props} />;
}

function disableDates(data) {
  let dataAzi=new Date();
  
  if(data.date.setHours(0,0,0,0) === dataAzi.setHours(0,0,0,0)){
    console.log("DISABLE");
    return true;
  }
  return false;
}
export default withRouter(ProgramariForm);
