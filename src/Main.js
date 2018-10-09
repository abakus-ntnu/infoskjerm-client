import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Events from './Events/Events';
import Time from './components/Time/index';


class Main extends Component {
  render() {
    return (
      <Router>
        <div>
          <div>
            <Time displayTime displayDate />
          </div>
          <Route exact path="/" redirect="/events" component={Events} />
          {/*
          <Route path="/events" component={Events} />
          <Route path="/buses" component={Buses} />
          */}
        </div>
      </Router>
    );
  }
}

export default Main;
