import React, { Component } from 'react';
import './Directions.css';

export default class Directions extends Component {
  render() {
    const { title, message, className } = this.props;
    return <div className={className}>


      <div className="WhereTheImageGoes">
        {/* <img className="DirectImage" src='./images/background2.jpg' /> */}
        <header className="header"><h1>Broad City Clicky Game!</h1>
          <h3>Click on any image to earn a point, but don't click on the same picture more than once. Click all 12 pics, and you win.</h3>
        </header>
      </div>

    </div>
  }
}