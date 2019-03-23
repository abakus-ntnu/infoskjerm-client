import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { CSSTransitionGroup } from 'react-transition-group';
import Time from './components/Time/index';
import Bus from './Bus/Bus';
import Events from './Events/Events';
import SignUpEvents from './Events/SignUpEvents';
import Abakus from './components/Abakus';

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
          <Route path="/signup" component={SignUpEvents} />
          <Abakus />
        </div>
      </Router>
    );
  }
}

export default Main;

/*
          <Route path="/bus" component={Bus} />
          <Route path="/signup" component={SignUpEvents} />
*/
