import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/css/bootstrap-theme.css";
import Header from "../../componente/Header/index";
import "./styles.css";

class ProfilMedic extends Component {
  render() {
    return (
      <div>
        <div>
          <Header isWelcomePage={true}/>
        </div>
        <div className="div">
<p className="p"> DR. Ionut El'smechero Dorofet </p>
        <div className="divCartonas">
        

        <img src={require("../../assets/logo.jpg")} className="imgMica"/> 
        <div  className="stilChenar" >
        
          <p > Specializare: psiholog </p>
          <p> Cabinet: policlinica </p>
          <p >Orar: L-V: 12-17 </p>
          <p> Cabinet: Spital </p>
          <p > Email: elsmech.12@yahoo.com </p>
          <p > Telefon: 07123456</p>
          <p > Facebook:  </p>
         
          </div>
       
          
         
          </div>
         </div>
        
        </div>
    );
  }
}

export default ProfilMedic;
