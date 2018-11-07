import React, { Component } from 'react';
import { connect } from 'react-redux';
import { number, String } from 'prop-types';

class BusListItem extends Component {
  static propTypes = {
    line: number,
    destination: String,
    timeToDeparture: number,
  }

	static defaultProps = {
	  line: 0,
	  destination: '',
	  timeToDeparture: 0,
	}

	render() {
  	const { line, destination, timeToDeparture } = this.props;
	  return (
  <div>
    <span>{line}</span>
    <span>{destination}</span>
    <span>{timeToDeparture}</span>
  </div>
	  );
	}
}

export default BusListItem;
