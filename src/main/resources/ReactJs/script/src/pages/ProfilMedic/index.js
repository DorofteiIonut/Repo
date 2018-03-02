import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/css/bootstrap-theme.css";
import Header from "../../componente/Header/index";
import "./styles.css";

class ProfilMedic extends Component {
  render() {
    return (
        
        <div className="divContainer">
        <div>
          <Header isWelcomePage={false} />
        </div>
        </div>
    );
  }
}

export default ProfilMedic;
