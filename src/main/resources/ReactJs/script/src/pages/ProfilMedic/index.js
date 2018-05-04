import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/css/bootstrap-theme.css";
import Header from "../../componente/Header/index";
import "./styles.css";
import Rating from "react-rating";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import medicProfil from "../../commun/ReduxActions/ProfilMedicAction";
import CardRecenzii from "../../componente/CardRecenzii/index";
import CardServicii from "../../componente/CardServicii/index";

class ProfilMedic extends Component {
  async componentWillMount() {
    await this.props.medicProfil(
      this.props.authInfo.token,
      this.props.location.state.detail
    );
  }

  render() {
    if (this.props.profilMedic.dateMedic == null) {
      return <div />;
    } else {
      return (
        <div className="divProfilMedic">
          <div>
            <Header isWelcomePage={true} />
          </div>
          <div className="div">
            <p className="p">
              Doctor {this.props.profilMedic.dateMedic.nume}{" "}
              {this.props.profilMedic.dateMedic.prenume}{" "}
            </p>
            <div className="divCartonas">
              <div className="styleRating">
                <img
                  src={require("../../assets/avatar.png")}
                  className="imgMica"
                />

                <p className="ratingParagraf">Rating pret:</p>
                <Rating
                  placeholderRating={
                    this.props.profilMedic.dateMedic.mediePret / 2
                  }
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
                  placeholderRating={
                    this.props.profilMedic.dateMedic.medieServMedicale / 2
                  }
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
                  placeholderRating={
                    this.props.profilMedic.dateMedic.medieAparatura / 2
                  }
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
                <p>
                  {" "}
                  Specializare:{
                    this.props.profilMedic.dateMedic.specializare
                  }{" "}
                </p>
                <p> Cabinet: {this.props.profilMedic.dateMedic.adresaCab} </p>
                <p>Orar:{this.props.profilMedic.dateMedic.program} </p>
                <p> Email: {this.props.profilMedic.dateMedic.email} </p>
                <p> Telefon: {this.renderNrTel()}</p>
                <p> Facebook: {this.props.profilMedic.dateMedic.facebook} </p>
              </div>
            </div>
            <div className="divBtn">
              <button
                onClick={() => this.onClick(this.props.location.state.detail)}
                className="butonRezervare"
              >
                Rezervare
              </button>

              <button
                onClick={() => this.onClick(this.props.location.state.detail)}
                className="butonRecenzie"
              >
                Adauga recenzie
              </button>
            </div>
          </div>
          {this.renderlistaRecenzii()}
        </div>
      );
    }
  }
  renderNrTel() {
    let list = [];
    for (let i = 0; i < this.props.profilMedic.dateMedic.nrTel.length; i++) {
      list.push(<p> {this.props.profilMedic.dateMedic.nrTel[i]}</p>);
    }
    return list;
  }
  onClick(id) {
    this.props.history.push({
      pathname: "/programari",
      state: { idRezervare: id }
    });
  }

  renderlistaRecenzii() {
    let listaRec = [];
    let recenzie = {
      nume: "Dumitrescu",
      prenume: "Constantin",
      descriere: "Descriere despre medic bla vla bla bla bla bla bla vla.....!!!"
    };
    for (let i = 1; i <= 5; i++) {
      listaRec.push(<CardRecenzii recenzieModel={recenzie} />);
    }
    return listaRec;
  }
 
  
}
function mapStateToProps(state) {
  return {
    authInfo: state.authReducer,
    profilMedic: state.profilMedic
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      medicProfil: (token, id) => medicProfil(token, id)
    },
    dispatch
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfilMedic);
