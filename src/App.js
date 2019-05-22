import React, { Component } from 'react';
import './App.css';
import NavBar from './NavBar.js';
import Directions from './Directions.js';
import GamePieces from './GamePieces.js';


class App extends Component {
  state = {
    score: 0, gamePieces: ['./images/broadcity-directions.jpg',
      './images/background.jpg',
      './images/background2.jpg',
      './images/images1.jpg',
      './images/images2bc.jpg',
      './images/imagesbc4.jpg',
      './images/imagesbc5.jpg',
      './images/imagesbd6.jpg',
      './images/images7.jpg',
      './images/businessdrawing.jpg',
      './images/images8.jpg',
      './images/images9.jpg']
  };

  render() {
    return (
      <div className="App">
        <NavBar className="App-nav-bar" status={this.state.status} score={this.state.score} onReset={this.shuffleGamePieces} topScore={0} />
        <Directions className="App-directions" title="" message="" />
        <GamePieces className="App-game-images" app-background="background2.jpg" incrementScore={this.handleImageClicked} gamePieces={this.state.gamePieces} />
      </div>
    );
  }

  handleImageClicked = (uniqueimage) => {
    if (uniqueimage) {
      this.setState({ score: this.state.score + 1, status: "You guessed correctly" })
    } else {
      this.setState({ score: 0, status: "You guessed incorrectly" })
      
    }
    this.shuffleGamePieces();
  }

  shuffleGamePieces = () => {
    const gamePieces = this.state.gamePieces;

    
      var currentIndex = gamePieces.length;
      var temporaryValue, randomIndex;

      // Shuffle game pieces
     while (0 !== currentIndex) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        temporaryValue = gamePieces[currentIndex];
        gamePieces[currentIndex] = gamePieces[randomIndex];
        gamePieces[randomIndex] = temporaryValue;
      }
    this.setState({gamePieces: this.state.gamePieces})
    }

    // update app game pieces using this.setState(....)
  }


export default App;

