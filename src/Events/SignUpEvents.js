import React, { Component } from 'react';
import { func, arrayOf, object } from 'prop-types';
import { connect } from 'react-redux';
import { fetchEvents } from '../store/modules/events';
import HalfSignupEvents from './HalfSignupEvents';
import './SignUpEvents.css';


class SignUpEventsComponent extends Component {
  static propTypes = {
    get: func,
    data: arrayOf(object),
  }

  static defaultProps = {
    get: () => {},
    data: [],
  }

  componentDidMount() {
    const { get } = this.props;
    get();
  }

  getSignupEvents = (data) => {
    const today = new Date().toJSON();
    const list = data.filter(event => event.registrationTime && event.registrationTime > today)
      .sort((a, b) => (a.time < b.time ? -1 : 1));
    return list.slice(0, 3);
  }

  renderEvent() {
    const { data } = this.props;
    if (data[0]) {
      if (data[0].title) {
        return (
          <div id="signup-wrapper">
            <div className="split left">
              <h1>Neste Påmeldinger</h1>
              <HalfSignupEvents events={this.getSignupEvents(data)} className="half" />
            </div>
            <div className="split right">
              <h1>Neste Arrangement</h1>
              <HalfSignupEvents events={data.slice(0, 3)} className="half" />
            </div>
          </div>
        );
      }
    }
    return (
      <div id="signup-wrapper">
        <div className="split left">
          {/* <HalfSignupEvents events={this.getSignupEvents(data)} className="half" /> */}
        </div>
        <div className="split right">
          {/* <HalfSignupEvents events={data.slice(0, 3)} className="half" /> */}
        </div>
      </div>
    );
  }

  render() {
    return (
      <div id="signup-wrapper">
        {this.renderEvent()}
      </div>
    );
  }
}

const mapStateToProps = state => ({ data: state.events.data });

const mapDispatchToProps = dispatch => ({
  get: () => dispatch(fetchEvents()),
});

const SignUpEvents = connect(mapStateToProps, mapDispatchToProps)(SignUpEventsComponent);

export default SignUpEvents;
