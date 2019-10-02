import React, { Component } from 'react';
import { string, bool } from 'prop-types';
import './bus.css';


class BusListItem extends Component {
  static propTypes = {
    number: string.isRequired,
    bus: string.isRequired,
    time: string.isRequired,
    realtime: bool.isRequired,
  }

  checkRealTime() {
    const { realtime } = this.props;
    if (realtime) {
      return ('list-item live');
    }
    return ('list-item');
  }

  render() {
    const {
      number, bus, time,
    } = this.props;
    return (
      <div className={this.checkRealTime()} key={this.key}>
        <span className="line">{number}</span>
        <span className="destination">{bus}</span>
        <span className="time-to-departure">{time}</span>
      </div>
    );
  }
}

export default BusListItem;
