import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/css/bootstrap-theme.css";
import { Button } from "react-bootstrap";
import "./styles.css";
import { withRouter } from "react-router-dom";
import Dialog, {
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle
} from "material-ui/Dialog";
import Slide from "material-ui/transitions/Slide";
import TextareaAutosize from "react-autosize-textarea";
import NumericInput from "react-numeric-input";

class RecenzieForm extends Component {
  render() {
    return (
      <div className="divPrincipal">
        <label className="divTextComentariu">
          Lasa un comentariu:
          <div >
            <TextareaAutosize className="stilChenarComentarii"  rows={5}  placeholder="Lasa un comentariu" />
          </div>
        </label>
        <p className="pTitluNote">Note pentru:</p>

        <label className="divNote">
          Servicii medicale:
          <div >
            <NumericInput className=" " min={1} max={10} value={1} size={1}/>
          </div>
        </label>
        <label className="divNote">
          Aparatura:
          <div >
            <NumericInput className=" " min={1} max={10} value={1} size={1}/>
          </div>
        </label>

        <label className="divNote">
          Pret servicii:
          <div >
            <NumericInput className=" " min={1} max={10} value={1}  size={1}/>
          </div>
        </label>

         <label className="divNote">
          Aspectul cabinetului:
          <div >
            <NumericInput className=" " min={1} max={10} value={1}  size={1}/>
          </div>
        </label>

         <label className="divNote">
          Locatia cabinetului:
          <div >
            <NumericInput className=" " min={1} max={10} value={1}  size={1}/>
          </div>
        </label>
      </div>
    );
  }
}

export default RecenzieForm;
