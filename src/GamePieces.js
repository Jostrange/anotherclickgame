import React, { Component } from 'react';
import './GamePieces.css';
import GameImage from './GameImage.js';


export default class GamePieces extends Component {
  lastImageClickedSource = null;
  render() {

    const { className, gamePieces } = this.props;
    return <div className={className}>

      <div className="GamePieces-grid">
        {gamePieces.map(source => <GameImage onClick={this.handleImageClicked} Source={source} />
        )}
      </div>
    </div>



  }
  handleImageClicked = (Source) => {
    const { incrementScore } = this.props;
    console.log(Source);
    if (Source === this.lastImageClickedSource) {
      console.log("not unique image")
      incrementScore(false)
    } else {
      incrementScore(true)
      console.log("unique image")

    }

    this.lastImageClickedSource = Source;

  }







}




//then reset game
//} else +1 Score, update top score if current score is > top score
//shuffles always
