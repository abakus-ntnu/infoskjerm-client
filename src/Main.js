import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import Time from './components/Time/index';
import Bus from './Bus/Bus';
import Events from './Events/Events';

class Main extends Component {
  render() {
    return (
      <Router>
        <div>
          <div>
            <Time displayTime />
          </div>
          <Route exact path="/" component={() => <Redirect to="/events" />} />
          <Route path="/events" component={Events} />
          <Route path="/bus" component={Bus} />
        </div>
      </Router>
    );
  }
}

export default Main;
