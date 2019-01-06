import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
// import Events from './Events/Events';
import Time from './components/Time/index';


class Main extends Component {
  render() {
    return (
      <Router>
        <div>
          <Time displayTime />
          {/*
          <Route exact path="/" component={() => <Redirect to="/events" />} />
          <Route path="/events" component={Events} />
          <Route path="/buses" component={Buses} />
          */}
        </div>
      </Router>
    );
  }
}

export default Main;
