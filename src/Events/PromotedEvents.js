import React, { Component } from 'react';
import {
  string, number, func, object, arrayOf,
} from 'prop-types';
import { connect } from 'react-redux';
import { fetchEvents } from '../store/modules/events';
import SinglePromotedEvent from './SinglePromotedEvent';
import './PromotedEvents.css';


class PromotedEventsComponent extends Component {
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
    return list.slice(0, 2);
  }

  renderEvent() {
    const { data } = this.props;
    const eventList = this.getSignupEvents(data);
    console.log(data);
    if (eventList[0]) {
      if (eventList[0].title) {
        return (
          <div id="all-wrapper">
            <div className="split left marble-background">
              <SinglePromotedEvent event={eventList[0]} className="promotedBusiness" />
            </div>
            <div className="split right marble-background">
              <SinglePromotedEvent event={eventList[1]} className="promotedParty" />
            </div>
          </div>
        );
      }
    }
    return (
      <div id="all-wrapper">
        <div className="split left">
          {/* <SinglePromotedEvent event={business} className="promotedBusiness" /> */}
        </div>
        <div className="split right">
          {/* <SinglePromotedEvent event={party} className="promotedParty" /> */}
        </div>
      </div>
    );
  }

  render() {
    return (
      <div id="promoted-party-event">
        {this.renderEvent()}
      </div>
    );
  }
}


const mapStateToProps = state => ({ data: state.events.data });

const mapDispatchToProps = dispatch => ({
  get: () => dispatch(fetchEvents()),
});

const PromotedEvents = connect(mapStateToProps, mapDispatchToProps)(PromotedEventsComponent);

export default PromotedEvents;
