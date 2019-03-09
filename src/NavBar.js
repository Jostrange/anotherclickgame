import React, { Component } from 'react';
import './NavBar.css';

export default class NavBar extends Component {
  render() {
    const { onReset, status, score, topScore, className } = this.props;
    return <div className={className} onClick={onReset}>



      <div className="navbar">
        <div className="Reset"><a>onReset</a></div>
        <div className="Status"><a>{status}</a></div>
        <div className="Scores"><a>Score: {this.props.score}</a></div>
      </div>




    </div>
  }
}
