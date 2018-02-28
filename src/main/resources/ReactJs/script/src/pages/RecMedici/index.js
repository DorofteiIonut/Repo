import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import Header from '../../componente/Header/index';
import RecMediciForm from '../../componente/RecMediciForm/index';
import './styles.css';

class RecMedici extends Component {
    
      render() {
        return (
            <div className="divRecMedici">
                <Header isLoginPage={true}/>
                <h1 className="pageRecMediciTitle" > Inregistrare medic</h1>
                <RecMediciForm/>
            </div>

        );
      }

    }
    export default RecMedici;