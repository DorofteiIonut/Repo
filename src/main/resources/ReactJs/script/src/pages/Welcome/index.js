import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/css/bootstrap-theme.css";
import Header from "../../componente/Header/index";
import "./styles.css";

class Welcome extends Component {
  render() {
    return (
      <div>
        <div>
          <Header isWelcomePage={true}/>
        </div>
        <div className="div">
         </div>
        
        </div>
    );
  }
}

export default Welcome;
