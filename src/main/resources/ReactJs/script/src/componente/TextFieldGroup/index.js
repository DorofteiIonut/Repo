import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import { Button} from 'react-bootstrap';
import './styles.css';


class TextFieldGroup extends Component {
    
      render() {
        return (
            <div className="formContainerDiv">
              <form>
                    <div className="form-group">
                        <label>Username</label>
                        <input type="username" className="form-control" placeholder="Username" />
                    </div>
                    <div className="form-group">
                        <label>Password</label>
                        <input type="password" className="form-control" placeholder="Password"/>
                    </div>
                     <Button bsStyle="info" bsSize="lg" className="loginButtonStyle">Login</Button>
                </form>
            </div>
           
        );
      }
    }
    
    export default TextFieldGroup;