import React, { Component } from "react";
import { string, bool } from "prop-types";
import "./bus.css";

class BusListItem extends Component {
  static propTypes = {
    number: string.isRequired,
    bus: string.isRequired,
    time: string.isRequired,
    realtime: bool.isRequired
  };

  render() {
    const { number, bus, time, index } = this.props;
    return (
      <div className={index === 0 ? "list-item" : " list-item border-top"}>
        <div>
          <span className="line">{number}</span>
          <span className="destination">{bus}</span>
        </div>
        <span className="time-to-departure">{time}</span>
      </div>
    );
  }
}

export default BusListItem;
