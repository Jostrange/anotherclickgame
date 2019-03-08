import React, { Component } from 'react';
import './NavBar.css';

export default class NavBar extends Component {
  render() {
    const {onReset, status, score, topScore, className}=this.props;
    return <div className={className} onClick={onReset}>
      {status}
      {score}
      {topScore}

      <nav className="navbar navbar-default navbar-fixed-top">
         <ul>
          <li className="itemLeft">Test Your Memory</li>
          <li className="itemCenter"></li>
          <li className="itemRight">Score: {this.props.score}</li>
        </ul>
      </nav>
      
    </div>
  }
}
