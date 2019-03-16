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
    displayTime: true,
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
      dateString += this.dateToFormattedDate(dateObject);
    }
    if (displayDate && displayTime) {
      dateString += ' ';
    }
    if (displayTime) {
      dateString += this.dateToFormattedClock(dateObject);
    }
    return dateString;
  };

  dateToFormattedClock = (date) => {
    let timeString = '';
    timeString += `${this.dateToFormattedHours(date)}:`;
    timeString += `${this.dateToFormattedMinutes(date)}:`;
    timeString += this.dateToFormattedSeconds(date);
    return timeString;
  }

  dateToFormattedHours = (date) => {
    const hours = date.getHours();
    return hours.toString().length <= 1 ? `0${hours}` : hours;
  };

  dateToFormattedMinutes = (date) => {
    const minutes = date.getMinutes();
    return minutes.toString().length <= 1 ? `0${minutes}` : minutes;
  };

  dateToFormattedSeconds = (date) => {
    const seconds = date.getSeconds();
    return seconds.toString().length <= 1 ? `0${seconds}` : seconds;
  };

  dateToFormattedDate = (date) => {
    const formattedDate = `${date.getDate()}. ${this.dateToMonth(date)}`;
    return formattedDate;
  }

  dateToMonth = (date) => {
    const months = ['januar', 'februar', 'mars', 'april', 'mai', 'juni', 'juli', 'august', 'september', 'oktober', 'november', 'desember'];
    return months[date.getMonth()];
  }

  render() {
    const { date } = this.state;
    return (
      <div id="rectangular-shape">
        <span id="date">
          {this.dateToFormattedDate(date)}
        </span>
        <span id="time">
          {this.dateToFormattedClock(date)}
        </span>
      </div>
    );
  }
}

export default Time;
