import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Events from './Events/Events';
import Time from './components/Time/index';


class Main extends Component {
  render() {
    return (
      <Router>
        <div>
          <Time displayTime displayDate />
          {this.renderList()}
          <p>sponset av IDI</p>
        </div>
        <Route exact path="/" component={Events} />
        {/*
          <Route path="/events" component={Events} />
          <Route path="/buses" component={Buses} />
          */}
      </Router>
    );
  }
}

export default Main;
