import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import './styles.css';
import Rating from "react-rating";

class CardCabinet extends Component {
    
      render() {
        return (
            <div className="divCard">
                <div className="divImgCabinet">
                <img src={require("../../assets/logo.jpg")} className="imgStyle" />

                <Rating
            placeholderRating={3.88}
            emptySymbol={
              <img
                src={require("../../assets/star-grey.png")}
                className="icon"
              />
            }
            placeholderSymbol={
              <img
                src={require("../../assets/star-red.png")}
                className="icon"
              />
            }
            fullSymbol={
              <img
                src={require("../../assets/star-yellow.png")}
                className="icon"
              />
            }
            readonly={true}
          />
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