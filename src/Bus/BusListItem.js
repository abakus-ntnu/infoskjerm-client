import React, { Component } from 'react';
// import { connect } from 'react-redux';
import { string } from 'prop-types';
import './bus.css';


class BusListItem extends Component {
  static propTypes = {
    line: string.isRequired,
    destination: string.isRequired,
    timeUntilDeparture: string.isRequired,
  }

  /*
  static defaultProps = {
    line: '',
    destination: '',
    timeUntilDeparture: 0,
  }
*/
  render() {
    const {
      line, destination, timeUntilDeparture,
    } = this.props;
    return (
      <div className="list-item" key={this.key}>
        <span className="line">{line}</span>
        <span className="destination">{destination}</span>
        <span className="time-to-departure">{timeUntilDeparture}</span>
      </div>
    );
  }
}

export default BusListItem;
