import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


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
  
    if(!this.state.data)
      return <p>Looo.....</p>
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title"> Welcome to React </h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <p> Api responseis:{this.state.data}
          </p>
      </div>
    );
  }
}

export default App;
