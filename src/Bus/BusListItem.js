import React, { Component } from 'react';
import { connect } from 'react-redux';
import { number, String } from 'prop-types';
import './bus.css';


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
      <div className="list-item">
        <span className="line">{line}</span>
        <span className="destination">{destination}</span>
        <span className="time-to-departure">{timeToDeparture}</span>
      </div>
    );
  }
}

export default BusListItem;
