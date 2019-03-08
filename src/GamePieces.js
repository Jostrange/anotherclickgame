import React, { Component } from 'react';
import './GamePieces.css';
import GameImage from './GameImage.js';


export default class GamePieces extends Component {
  lastImageClickedSource = null;
  render() {

    const { className } = this.props;
    return <div className={className}>
      <div className="GamePieces-grid">
        <GameImage onClick={this.handleImageClicked} Source='./images/broadcity1.jpg' />
        <GameImage onClick={this.handleImageClicked} Source='./images/broadcity2.jpg' />
        <GameImage onClick={this.handleImageClicked} Source='./images/broadcity3.jpg' />
        <GameImage onClick={this.handleImageClicked} Source='./images/broadcity4.jpg' />
        <GameImage onClick={this.handleImageClicked} Source='./images/broadcity5.jpg' />
        <GameImage onClick={this.handleImageClicked} Source='./images/broadcity6.jpg' />
        <GameImage onClick={this.handleImageClicked} Source='./images/broadcity7.jpg' />
        <GameImage onClick={this.handleImageClicked} Source='./images/broadcity8.jpg' />
        <GameImage onClick={this.handleImageClicked} Source='./images/broadcity9.jpg' />
        <GameImage onClick={this.handleImageClicked} Source='./images/background.jpg' />
        <GameImage onClick={this.handleImageClicked} Source='./images/broadcity11.jpg' />
        <GameImage onClick={this.handleImageClicked} Source='./images/broadcity12.jpg' />

      </div>
    </div>

  }
  handleImageClicked = (Source) => {
    console.log(Source);
    if (Source === this.lastImageClickedSource) {
      console.log("not unique image")
    } else {
      console.log("unique image")
    }

    this.lastImageClickedSource = Source;

  }
  // const shuffle = require('shuffle-array'),
  // GameImage = [1, 2, 3, 4, 5];

  // shuffle(collection);

  // console.log(collection);
}




//then reset game
//} else +1 Score, update top score if current score is > top score
//shuffles always
