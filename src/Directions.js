import React, { Component } from 'react';
import './Directions.css';

export default class Directions extends Component {
  render() {
    const {title, message}=this.props;
    return <div>
     {title}
     {message}
      
    </div>
  }
}