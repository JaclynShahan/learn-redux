import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import router from './router';
import { Link } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      //import the Router file
      <div className="App">
      <Link to="/">Home</Link>
      <br></br>
      <Link to="/other">Other</Link>
      <br></br>
      <Link to="/thisComponent">ThisComponent</Link>
{/* Render the router in the return */}
      {router} 
     
      </div>
    );
  }
}

export default App;
