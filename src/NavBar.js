import React, { Component } from 'react';
import './NavBar.css';

export default class NavBar extends Component {
  render() {
    const {onReset, status, score, topScore}=this.props;
    return <div onClick={onReset}>
      {status}
      {score}
      {topScore}
      
    </div>
  }
}
