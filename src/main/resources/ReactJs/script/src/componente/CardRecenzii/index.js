import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import './styles.css';
import {withRouter} from 'react-router-dom';
import PropTypes from 'prop-types';


class CardRecenzii extends Component{
   
    render(){
        console.log(JSON.stringify(this.props.recenzieModel)+"   recenzie obiect")
        return(
            <div className="divCartonasRecenzie">
                <div className="infoRecenzie">
                        <p>{this.props.recenzieModel.username}</p>
                    
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