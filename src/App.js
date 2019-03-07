import React, { Component } from 'react';
import './App.css';
import NavBar from './NavBar.js';
import Directions from './Directions.js';
import GamePieces from './GamePieces.js';


class App extends Component {

  render() {
    return (
      <div className="App">
        <NavBar className="App-nav-bar" status="you've guessed right" score={1} onReset={this.refresh} topScore={0} />
        <Directions className="App-directions" title="Clicky Game!" message="Click on an image to earn points, but don't click on any more than once!" />
        <GamePieces className="App-game-images"/>
      </div>
    );
  }

  refresh = () => {
    alert("reset me");
  }
}

export default App;
