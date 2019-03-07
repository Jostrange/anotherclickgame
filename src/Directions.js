import React, { Component } from 'react';
import './Directions.css';

export default class Directions extends Component {
  render() {
    const {title, message, className}=this.props;
    return <div className={className}>
     {title}
     {message}
      
    </div>
  }
}