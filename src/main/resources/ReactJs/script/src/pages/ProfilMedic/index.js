import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/css/bootstrap-theme.css";
import Header from "../../componente/Header/index";
import "./styles.css";
import Rating from "react-rating";

class ProfilMedic extends Component {
  render() {
    return (
      <div>
        <div>
          <Header isWelcomePage={true} />
        </div>
        <div className="div">
          <p className="p"> Doctor Popescu Elena </p>
          <div className="divCartonas">
            <div className="styleRating">
              <img
                src={require("../../assets/avatar.png")}
                className="imgMica"
              />

              <p className="ratingParagraf">Rating pret:</p>
              <Rating
                placeholderRating={3}
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
               <p className="ratingParagraf">Rating servicii medicale:</p>
              <Rating
                placeholderRating={3}
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
               <p className="ratingParagraf">Rating aparatura:</p>
              <Rating
                placeholderRating={3}
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

            <div className="stilChenar">
              <p> Specializare: psiholog </p>
              <p> Cabinet: policlinica </p>
              <p>Orar: L-V: 12-17 </p>
              <p> Cabinet: Spital </p>
              <p> Email: popescue.12@yahoo.com </p>
              <p> Telefon: 07123456</p>
              <p> Facebook: /popescu.elena </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ProfilMedic;
