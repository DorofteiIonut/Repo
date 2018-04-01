import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/css/bootstrap-theme.css";
import Header from "../../componente/Header/index";
import "./styles.css";
import Rating from "react-rating";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import medicProfil from "../../commun/ReduxActions/ProfilMedicAction"

class ProfilMedic extends Component {

 async componentWillMount(){
  await this.props.medicProfil(this.props.authInfo.token,13);
  }   

  render() {
    if(this.props.profilMedic.dateMedic==null){
      return <div></div>
    }
    else{
      console.log("ce avem in redux:"+JSON.stringify(this.props.profilMedic));

    return (
      <div>
        <div>
          <Header isWelcomePage={true} />
        </div>
        <div className="div">
          <p className="p"> Doctor {this.props.profilMedic.dateMedic.nume} {this.props.profilMedic.dateMedic.prenume} </p>
          <div className="divCartonas">
            <div className="styleRating">
              <img
                src={require("../../assets/avatar.png")}
                className="imgMica"
              />

              <p className="ratingParagraf">Rating pret:</p>
              <Rating
                placeholderRating={this.props.profilMedic.dateMedic.mediePret/2}
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
                placeholderRating={this.props.profilMedic.dateMedic.medieServMedicale/2}
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
                placeholderRating={this.props.profilMedic.dateMedic.medieAparatura/2}
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
              <p> Specializare:{this.props.profilMedic.dateMedic.specializare} </p>
              <p> Cabinet: {this.props.profilMedic.dateMedic.adresaCab} </p>
              <p>Orar:{this.props.profilMedic.dateMedic.program} </p>
              <p> Email: {this.props.profilMedic.dateMedic.email} </p>
              <p> Telefon: {this.renderNrTel()}</p>
              <p> Facebook: {this.props.profilMedic.dateMedic.facebook} </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
  }
  renderNrTel(){
    let list=[];
    for(let i=0;i<this.props.profilMedic.dateMedic.nrTel.length;i++){
      list.push(
      <p> {this.props.profilMedic.dateMedic.nrTel[i]}</p>
      );
    }
    return list;
  }
}
function mapStateToProps(state) {
  return {
    authInfo: state.authReducer,
    profilMedic:state.profilMedic,    
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
