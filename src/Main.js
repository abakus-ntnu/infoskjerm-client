import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import TransitionGroup from 'react-transition-group/TransitionGroup';
import Time from './components/Time/index';
import Bus from './Bus/Bus';
import Events from './Events/Events';
import SignUpEvents from './Events/SignUpEvents';
import Abakus from './components/Abakus';

const firstChild = (props) => {
  const childrenArray = React.Children.toArray(props.children);
  return childrenArray[0] || null;
};
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
