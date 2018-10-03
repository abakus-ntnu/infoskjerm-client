import React, { Component } from 'react';

class Time extends Component {
  state = {
    date: new Date(),
  };

  timer = null;

  componentDidMount() {
    this.timer = setInterval(this.tick, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  tick = () => this.setState({ date: new Date() });

  render() {
    const { date } = this.state;
    return <div>{date.toLocaleTimeString()}</div>;
  }
}

export default Time;
