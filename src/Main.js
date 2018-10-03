import React, { Component } from 'react';
import { connect } from 'react-redux';
import { func, object, arrayOf } from 'prop-types';
import { BrowserRouter as Router } from 'react-router-dom';
import Time from './components/Time/index';

import { fetchEvents } from './Store/modules/events';

class MainComponent extends Component {
  static propTypes = {
    get: func,
    data: arrayOf(object),
  };

  static defaultProps = {
    get: () => {},
    data: [],
  };

  componentDidMount() {
    const { get } = this.props;
    get();
  }

  renderList() {
    const { data } = this.props;
    return data.map(event => (
      <div key={event.id}>
        <h3>{event.title}</h3>
        <h4>{event.description}</h4>
        <img src={event.cover} width="300" height="120" alt="Cover" />
      </div>
    ));
  }

  render() {
    return (
      <Router>
        <div>
          <Time displayTime displayDate />
          {this.renderList()}
          <p>sponset av IDI</p>
        </div>
        {/*
        <Route exact path="/" component={Events} />
        <Route path="/events" component={Events} />
        <Route path="/buses" component={Buses} />
        */}
      </Router>
    );
  }
}

const mapStateToProps = state => ({ data: state.data });

const mapDispatchToProps = dispatch => ({
  get: () => dispatch(fetchEvents()),
});

const Main = connect(
  mapStateToProps,
  mapDispatchToProps,
)(MainComponent);

export default Main;
