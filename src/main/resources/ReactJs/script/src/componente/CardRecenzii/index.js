import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import './styles.css';
import {withRouter} from 'react-router-dom';
import PropTypes from 'prop-types';


class CardRecenzii extends Component{
   
    render(){
        return(
            <div className="divCartonasRecenzie">
            <div className="divAvatarRecenzie" >
            <img src={require("../../assets/logo.jpg")} className="divAvatarRecenzie" />
                </div>
                <div className="infoRecenzie">
                        <p>Nume:{this.props.recenzieModel.nume}</p>
                        <p>Prenume: {this.props.recenzieModel.prenume}</p>
                    </div>
                    <div className="descriereRecenzie">
                        <p>{this.props.recenzieModel.descriere}</p>
                        </div>
                </div>
        );
    }
}

CardRecenzii.propTypes={
    recenzieModel:PropTypes.object
}

export default  (withRouter(CardRecenzii))