import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import Header from '../../componente/Header/index';
import './styles.css';
import { connect } from 'react-redux';
import { bindActionCreators } from "redux";
import CardWorkPanel from "../../componente/CardWorkPanel/index";
import programariAction from "../../commun/ReduxActions/ProgramariAction";


class WorkPanel extends Component {
  constructor(props) {
    super(props);
  }

     render() {
      console.log(this.props.id_programare);
        return (
            <div className="divBackgroundWorkPanel">
                <Header isLoginPage={true}/>
                <h1> Programari</h1>
               <div className="divCartonasWorkPannel">
               {this.renderlistaProgramari()}
                 </div>
            </div>

        );
      }
      renderlistaProgramari(){
        let listaProgramare=[];
        for(let i=0;i<5;i++ ){
          listaProgramare.push(
          <CardWorkPanel
          // idProgramare={this.props.listaProgramari.listaProgramari[i].id_programare}
          // dataProgramare={this.props.listaProgramari.listaProgramari[i].data}
          // firstname={this.props.listaProgramari.listaProgramari[i].nume}
          // lastname={this.props.listaProgramari.listaProgramari[i].prenume}
          // mail={this.props.listaProgramari.listaProgramari[i].email}
          // tel={this.props.listaProgramari.listaProgramari[i].nrtel}
          
          />)
        }
        return listaProgramare;
      }
    }

    function mapStateToProps(state) {
      return {
        authInfo: state.authReducer,
        listaProgramari: state.listaProgramari,
      };
    }
    
    function mapDispatchToProps(dispatch) {
      return bindActionCreators(
        {
          programariAction: (token, id) => programariAction(token, id),
          },
        dispatch
      );
    }
    


    export default connect(mapStateToProps, mapDispatchToProps)  (WorkPanel);