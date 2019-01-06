import { Component } from 'react';
import { bool } from 'prop-types';

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
      dateString += dateObject.toLocaleDateString();
    }
    if (displayDate && displayTime) {
      dateString += ' ';
    }
    if (displayTime) {
      dateString += dateObject.toLocaleTimeString({ hourCycle: 'h24' });
      dateString = dateString.substring(0, dateString.length - 2);
      // The above removes the "am" or "pm" from the time string.
    }
    return dateString;
  };

  render() {
    const { date } = this.state;
    return this.formatTime(date);
  }
}

export default Time;
