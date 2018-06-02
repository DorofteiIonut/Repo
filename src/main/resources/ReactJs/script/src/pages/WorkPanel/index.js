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

     render() {

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
        let listaProgramari=[];
        for(let i=0;i<5;i++ ){
          listaProgramari.push(<CardWorkPanel/>)
        }
        return listaProgramari;
      }
    }

    function mapStateToProps(state) {
      return {
        authInfo: state.authReducer,
        getProgramari: state.getProgramari,
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