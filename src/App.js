import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './NavBar.js';
import Directions from './Directions.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar status="you've guessed right" score={1} onReset={this.refresh} topScore={0}>

        </NavBar>
        <Directions title="Clicky Game!" message="Click on an image to earn points, but don't click on any more than once!">

        </Directions>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            I know React
          </a>
        </header>
      </div>
    );
  } 
  refresh = () =>{
    alert("reset me");
  }
}

export default App;
