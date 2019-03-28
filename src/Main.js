import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { func, shape } from 'prop-types';
import { connect } from 'react-redux';
import Time from './components/Time/index';
import Bus from './Bus/Bus';
import Events from './Events/Events';
import SignUpEvents from './Events/SignUpEvents';
import Abakus from './components/Abakus';
import { fetchNextComponent } from './store/modules/animation';

class MainComponent extends Component {
  static propTypes = {
    get: func,
    data: shape(),
  }

  static defaultProps = {
    get: () => { },
    data: [],
  }

  componentDidMount() {
    const { get } = this.props;
    get();
    setInterval(() => {
      get();
    }, 10 * 1000);
  }


  renderComponent() {
    const { data } = this.props;
    switch (data.currentComponent) {
      case 'bus':
        return (<Bus />);
      case 'events':
        return (<Events />);
      case 'signup':
        return (<SignUpEvents />);
      default:
        return (<Bus />);
    }
  }

  render() {
    return (
      <Router>
        <div>
          <div>
            <Time displayTime />
          </div>
          {this.renderComponent()}
          <Abakus />
        </div>
      </Router>
    );
  }
}

const mapStateToProps = state => ({ data: state.animation });

const mapDispatchToProps = dispatch => ({
  get: () => dispatch(fetchNextComponent()),
});

const Main = connect(mapStateToProps, mapDispatchToProps)(MainComponent);

export default Main;

/*
          <Route exact path="/" component={() => <Redirect to="/events" />} />
          <Route path="/events" component={Events} />
          <Route path="/bus" component={Bus} />
          <Route path="/signup" component={SignUpEvents} />
*/
