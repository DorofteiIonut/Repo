import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import Header from '../../componente/Header/index';
import './styles.css';
import { connect } from 'react-redux';


class Recenzie extends Component {

     render() {

        return (
            <div className="divRecenzie">
                <Header isLoginPage={true}/>
                <h1 > Recenzii</h1>
               
            </div>

        );
      }
    }
    function mapStateToProps(state){
        return {
          authInfo:state.authReducer
        };
      }


    export default connect(mapStateToProps) (Recenzie);