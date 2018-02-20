import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import './styles.css';

class CardCabinet extends Component {
    
      render() {
        return (
            <div className="divCard">
                <div className="divImgCabinet">
                <img src={require("../../assets/logo.jpg")} className="imgStyle" />
                <p className="rating">Rating:8,35</p>
                    </div>
                    
                    <div className="divDate">
                        <p>Orar: 07:30-16:00 </p>
                        <p>Denumire: Policlinica</p>
                        <p>Adresa: Suceava </p> 
                        <p>Nr. Telefon:07432465432 </p>
                        <p>Tip cabinet: Privat </p>
                    </div>
            </div>
        );
      }
    }
    
    export default CardCabinet;