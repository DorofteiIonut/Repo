import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import Header from '../../componente/Header/index';
import CardMedic from '../../componente/CardMedic/index';
import './styles.css';

class Medici extends Component {
    
      render() {
        return (
            <div className="divMedici">
                 <Header/> 
                 <div className="divListaMedici">
                 {this.renderListaMedici()}
                </div>
            </div>

        );
      }

      renderListaMedici(){
          let listaCard=[];
          for(let i=1; i<=5;i++){
              listaCard.push(<CardMedic/>)
          }
          return listaCard;
      } 
    }
    
    export default Medici;