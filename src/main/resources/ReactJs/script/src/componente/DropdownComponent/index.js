import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/css/bootstrap-theme.css";
import "./styles.css";

class Dropdown extends Component {
  render() {
    return (
      <div className="headerDiv">
        <a className="textlistaMedici" href="/medici">
        <p onClick={()=>this.onClick()}>Dentisti</p>
        </a>
        <a className="textlistaMedici" href="/medici">
        <p>Cardiolog</p>
        </a>
        <a className="textlistaMedici" href="/medici">
        <p>Pediatru</p>
        </a>
        <a className="textlistaMedici" href="/medici">
        <p>General</p>
        </a>
      </div>
    );
  }
  onClick(){
      console.log("jjhhhikh")
  }
}


export default Dropdown;
