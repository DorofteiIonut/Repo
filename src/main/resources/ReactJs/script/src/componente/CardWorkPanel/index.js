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
               <p className="styleDatePacient">Datele pacientului!!</p>
                </div>
        );
    }
}

// CardWorkPanel.propTypes={
//     recenzieModel:PropTypes.object
// }

export default  (withRouter(CardWorkPanel))