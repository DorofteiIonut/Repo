import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import './styles.css';
import {withRouter} from 'react-router-dom';
import PropTypes from 'prop-types';


class CardWorkPanel extends Component{
   
    render(){
        
        return(
            <div className="divCartonasWorkPanel">
               <p>Data: {this.props.dataProgramare}</p>
               <p>Nume: {this.props.firstname}</p>
               <p>Prenume: {this.props.lastname}</p>
               <p>E-mail: {this.props.mail}</p>
               <p>Numar telefon: {this.props.tel}</p>
                </div>
        );
    }
}


export default  (withRouter(CardWorkPanel))