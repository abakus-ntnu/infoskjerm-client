import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
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
          <Route
            exact
            path="/"
            children={({ match, ...rest }) => (
              <TransitionGroup component={Events}>
                {match && <Events {...rest} />}
              </TransitionGroup>
            )}
          />
          <Route
            path="/events"
            children={({ match, ...rest }) => (
              <TransitionGroup component={Events}>
                {match && <Events {...rest} /> }
              </TransitionGroup>
            )}
          />
          <Route
            path="/bus"
            children={({ match, ...rest }) => (
              <TransitionGroup component={Bus}>
                {match && <Bus {...rest} /> }
              </TransitionGroup>
            )}
          />
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
