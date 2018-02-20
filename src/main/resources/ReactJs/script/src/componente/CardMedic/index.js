import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import './styles.css';

class CardMedic extends Component {
    
      render() {
        return (
            <div className="divCard">
                <div className="divImagine">
                <img src={require("../../assets/logo.jpg")} className="imgStyle" />
                <p className="rating">Rating:8,35</p>
                    </div>
                    
                    <div className="divDate">
                        <p>Nume: Doctor </p>
                        <p>Prenume: Plusica </p>
                        <p>Adresa: Suceava </p> 
                        <p>Nr. Telefon:07432465432 </p>
                    </div>
            </div>
        );
      }
    }
    
    export default CardMedic;