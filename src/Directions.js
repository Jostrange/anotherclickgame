import React, { Component } from 'react';
import './Directions.css';

export default class Directions extends Component {
  render() {
    const { title, message, className } = this.props;
    return <div className={className}>
      {title}
      {message}


    const Jumbotron = () => (
	<header className = "header">
		<h1>Broad City Clicky Game!</h1>
		<h2>Click on any image to earn a point, but don't click on the same picture more than once. Click all 12 pics, and you win.</h2>
	</header>

    </div>
  }
}