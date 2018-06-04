import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import Header from '../../componente/Header/index';
import './styles.css';
import { connect } from 'react-redux';
import RecenzieForm from "../../componente/RecenzieForm/index";


class Recenzie extends Component {

     render() {
      console.log(this.props.location.state.idRecenzie)
        return (
            <div className="divRecenzie">
                <Header />
                <h1 > Recenzii</h1>
               <RecenzieForm/>
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