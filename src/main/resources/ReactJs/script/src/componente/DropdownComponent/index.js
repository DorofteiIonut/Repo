import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/css/bootstrap-theme.css";
import "./styles.css";

class Dropdown extends Component {
  render() {
    return (
      <div className="headerDiv">
        <p onClick={()=>this.onClick()}>Dentisti</p>
        <p>Cardiolog</p>
        <p>Pediatru</p>
        <p>General</p>
      </div>
    );
  }
  onClick(){
      console.log("jjhhhikh")
  }
}


export default Dropdown;