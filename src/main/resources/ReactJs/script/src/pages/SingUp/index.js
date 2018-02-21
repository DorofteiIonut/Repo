import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import Header from '../../componente/Header/index';
import SignUpForm from '../../componente/SignUpForm/index';
import './styles.css';

class SignUp extends Component {
    
      render() {
        return (
            <div className="divSignUp">
                <Header isLoginPage={true}/>
                <h1 className="pageSignUpTitle"> Sign Up</h1>
                <SignUpForm/>
            </div>

        );
      }
    }
    export default SignUp;