import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import Header from '../../componente/Header/index';
import ProgramariForm from '../../componente/ProgramariForm/index';
import './styles.css';

class Programari extends Component {
    componentDidMount(){
        
    }

     render() {
        return (
            <div className="divProgramari">
                <Header isLoginPage={true}/>
                <h1 className="pageProgramariTitle"> Programari</h1>
                <ProgramariForm/>
            </div>

        );
      }
    }
    export default Programari;