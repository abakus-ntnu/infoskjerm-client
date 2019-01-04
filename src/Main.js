import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
// import Events from './Events/Events';
// import BusinessEvents from './Events/BusinessEvents';
import Time from './components/Time/index';
import Bus from './Bus/Bus';

class Main extends Component {
  render() {
    return (
      <Router>
        <div>
          <div>
            <Time displayTime />
          </div>
          <Bus />
        </div>
      </Router>
    );
  }
}

export default Main;
