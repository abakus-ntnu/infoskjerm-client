import React, { Component } from 'react';
// import { connect } from 'react-redux';
import { string, bool } from 'prop-types';
import './bus.css';


class BusListItem extends Component {
  static propTypes = {
    line: string.isRequired,
    destination: string.isRequired,
    timeUntilDeparture: string.isRequired,
    isRealtimeData: bool.isRequired,
  }

  checkRealTime() {
    const { isRealtimeData } = this.props;
    if (isRealtimeData) {
      return ("list-item-live");
    }
    return ("list-item");
  }

  render() {
    const {
      line, destination, timeUntilDeparture,
    } = this.props;
    return (
      <div className={this.checkRealTime()} key={this.key}>
        <span className="line">{line}</span>
        <span className="destination">{destination}</span>
        <span className="time-to-departure">{timeUntilDeparture}</span>
      </div>
    );
  }
}

export default BusListItem;
