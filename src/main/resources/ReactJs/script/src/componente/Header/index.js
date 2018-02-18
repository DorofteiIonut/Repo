import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import './styles.css';
import Dropdown from "../DropdownComponent/index";


class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      drop: false
    } 
  }

      render() {
        return (
            <div className="headerContainerDiv">
              <nav class="navbar navbar-inverse">
              <img src={require("../../assets/logo.jpg") } className="logoStyle"/>
                <div  class="container-fluid">     
                      <ul class="nav navbar-nav navbar-right">
                      <li><a href="#">Welcome Page</a></li>
                      <li > <a href="#"><div className="divList">  <p onClick={()=>this.changeDropState()}> Medici</p>{this.state.drop &&  <Dropdown/>}</div> </a></li>
                      <li><a href="#">Cabinete</a></li>
                      <li><a href="#"><span class="glyphicon glyphicon-user"></span> Sign Up</a></li>
                      <li><a href="#"><span class="glyphicon glyphicon-log-in"></span> Login</a></li>
                      </ul>
                </div>
              </nav>
            </div>

        );
      }

      changeDropState(){
        if(this.state.drop==false)
        this.setState({
            drop:true,
        })
        else
        this.setState({
          drop:false
        })
      }
    }
    
    export default Header;