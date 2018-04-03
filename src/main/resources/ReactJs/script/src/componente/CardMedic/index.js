import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/css/bootstrap-theme.css";
import "./styles.css";
import Rating from "react-rating";

class CardMedic extends Component {
  render() {
    return (
      <div className="divCard">
        <div className="divImagine">
          <img src={require("../../assets/logo.jpg")} className="imgStyle" />

          <Rating
            placeholderRating={2.7}
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
