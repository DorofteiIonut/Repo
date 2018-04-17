import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/css/bootstrap-theme.css";
import Header from "../../componente/Header/index";
import "./styles.css";
import Rating from "react-rating";

class ProfilCabinet extends Component {
  render() {
    return (
      <div>
        <div>
          <Header isWelcomePage={true} />
        </div>
        <div className="bigDiv">
          <p className="titlu"> Policlinica </p>
          <div className="divCartoon">
            <div className="ratingStyles">
              <img
                src={require("../../assets/avatar.png")}
                className="smallImg"
              />
              <p className="paragrphRating"> Rating locatie cabinet</p>
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
              <p className="paragrphRating"> Rating aspect cabinet</p>
              <Rating
                placeholderRating={3.0}
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
            <div className="infoDiv">
                <p>Orar: 07:30-16:00 </p>
                <p>Adresa: Suceava </p>
                <p>Nr. Telefon:07432465432 </p>
                <p>Tip cabinet: Privat </p>
              </div>
          </div>
        </div>
      </div>
    );
  }
}
export default ProfilCabinet;
