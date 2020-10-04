import React, { Component } from 'react';
import { func, shape } from 'prop-types';
import { connect } from 'react-redux';
import Bus from './Bus/Bus';
import PromotedEvents from './Events/Events';
import UpcomingEvents from './Events/UpcomingEvents/UpcomingEvents';
import { fetchNextComponent } from './store/modules/animation';
import './Main.css';

class MainComponent extends Component {
  static propTypes = {
    get: func,
    data: shape(),
  };

  static defaultProps = {
    get: () => {},
    data: [],
  };

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
        return <Bus />;
      case 'events':
        return <PromotedEvents />;
      case 'signup':
        return <UpcomingEvents />;
      default:
        return <Bus />;
    }
  }

  render() {
    return (
      <div className="main">
        <div className="wrapper">
          {this.renderComponent()}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({ data: state.animation });

const mapDispatchToProps = dispatch => ({
  get: () => dispatch(fetchNextComponent()),
});

const Main = connect(mapStateToProps, mapDispatchToProps)(MainComponent);

export default Main;
