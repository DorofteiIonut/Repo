import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import './styles.css';


class Header extends Component {
    
      render() {
        return (
            <div className="headerContainerDiv">
              
              <nav class="navbar navbar-inverse">
              <img src={require("../../assets/logo.jpg") } className="logoStyle"/>
                <div class="container-fluid">     
                      <ul class="nav navbar-nav navbar-right">
                      <li><a href="#">Welcome Page</a></li>
                      <li class="dropdown">
                      <a href='#' class="dropdown-toggle" data-toggle="dropdown">Medici
         <span class="caret"></span></a>
        <ul class="dropdown-menu-right">
          <li><a href="#">Dentist</a></li>
          <li><a href="#">Cardiolog</a></li>
          <li><a href="#">Page 1-3</a></li>
        </ul></li>
                      <li><a href="#">Cabinete</a></li>
                      <li><a href="#"><span class="glyphicon glyphicon-user"></span> Sign Up</a></li>
                      <li><a href="#"><span class="glyphicon glyphicon-log-in"></span> Login</a></li>
                      </ul>
                </div>
              </nav>
            </div>

        );
      }
    }
    
    export default Header;