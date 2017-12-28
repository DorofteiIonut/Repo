import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import { Navbar, Jumbotron, Button, Form } from 'react-bootstrap';

class App extends Component {
constructor(props){
  super(props);
  this.state={}
}



 componentDidMount(){
 try{ 
   this._callApi();
 }catch(error){
   console.log("ERROR MESAGE:"+error.message);
 }
 
}

 async _callApi(){
   const urlcors="http://localhost:8080/api/user";
   
    try{
      const resp= await fetch(urlcors, {
        method: 'GET',
        headers: {
          Accept: 'application/json',
        },
      },
      );
     const jS=await resp.json();
     this.setState({
       data:jS.userName,
     })
     console.log("Name:   ------  "+jS.userName);
     console.log("Pass:   ------  "+jS.password);
     console.log("Type:   ------  "+jS.typeGuest);
    }catch(err){
      console.log("Error:"+err.message);
    }
  }

  render() {
  

    return (
      <div >
        <Button bsStyle="danger" bsSize="large"> Submit</Button>
        <Button color="danger">Danger!</Button>
        <Form>
        <Button bsStyle="danger" bsSize="large"> Submit</Button>
          </Form>
      </div>
    );
  }
}

export default App;
