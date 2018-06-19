import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/css/bootstrap-theme.css";
import Header from "../../componente/Header/index";
import "./styles.css";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import CardWorkPanel from "../../componente/CardWorkPanel/index";
import programariAction from "../../commun/ReduxActions/ProgramariAction";

class WorkPanel extends Component {
   async componentDidMount(){
   await this.props.programariAction(
      this.props.authInfo.token,
      this.props.authInfo.idMedic
    );
   
  }

  render() {
  console.log("------------",this.props.programari);
    if (
      this.props.programari.inProgress ||  !this.props.programari.listaProgramari) {
      return <div>return</div>;
    }

    return (
      <div className="divBackgroundWorkPanel">
        <Header isLoginPage={true} />
        <h1> Programari</h1>
        <div className="divCartonasWorkPannel">
          {this.renderlistaProgramari()}
        </div>
      </div>
    );
  }
   renderlistaProgramari() {
    let listaProgramare = [];
    for (let i = 0; i < this.props.programari.listaProgramari.length; i++) {
      listaProgramare.push(
        <CardWorkPanel
          idProgramare={this.props.programari.listaProgramari[i].id_programare}
          dataProgramare={this.props.programari.listaProgramari[i].data}
          firstname={this.props.programari.listaProgramari[i].nume}
          lastname={this.props.programari.listaProgramari[i].prenume}
          mail={this.props.programari.listaProgramari[i].email}
          tel={this.props.programari.listaProgramari[i].nrtel}
        />
      );
    }
    return listaProgramare;
  }
  async loadLista() {
    await this.props.programariAction(
      this.props.authInfo.token,
      this.props.authInfo.idMedic
    );
  }
}

function mapStateToProps(state) {
  return {
    authInfo: state.authReducer,
    programari: state.programari
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      programariAction: (token, id) => programariAction(token, id)
    },
    dispatch
  );
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WorkPanel);
