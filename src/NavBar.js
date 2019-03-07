import React, { Component } from 'react';
import './NavBar.css';

export default class NavBar extends Component {
  render() {
    const {onReset, status, score, topScore, className}=this.props;
    return <div className={className} onClick={onReset}>
      {status}
      {score}
      {topScore}
      
    </div>
  }
}
