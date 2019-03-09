import React, { Component } from 'react';
import './GameImage.css';



export default class GameImage extends Component {
  render() {
    const { className, Source, onClick } = this.props;

    return <div className={className} onClick={this.handleImageClicked} >
      <img className="gameImageStyle" src={this.props.Source} />


    </div>

  }
  handleImageClicked = () => {
    const { Source, onClick } = this.props;
    console.log();
    onClick(Source);
  }

  
}