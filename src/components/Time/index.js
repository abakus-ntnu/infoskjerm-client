import React, { Component } from 'react';
import { bool } from 'prop-types';
import './Time.css';

class Time extends Component {
  state = {
    date: new Date(),
  };

  static propTypes = {
    displayTime: bool,
    displayDate: bool,
  };

  static defaultProps = {
    displayTime: false,
    displayDate: false,
  };

  timer = null;

  componentDidMount() {
    this.timer = setInterval(this.tick, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  tick = () => this.setState({ date: new Date() });

  formatTime = (dateObject) => {
    const { displayDate, displayTime } = this.props;
    let dateString = '';
    if (displayDate) {
      dateString += dateObject.toLocaleDateString();
    }
    if (displayDate && displayTime) {
      dateString += ' ';
    }
    if (displayTime) {
      dateString += dateObject.toLocaleTimeString();
      dateString = dateString.substring(0, dateString.length - 2);
    }
    return dateString;
  };

  render() {
    const { date } = this.state;
    return (
      <span>
        {this.formatTime(date)}
      </span>
    );
  }
}

export default Time;
