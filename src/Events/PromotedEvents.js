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

  getBusinessEvents(data) {
    const eventTypeList = ['company_presentation', 'course', 'KID_event', 'lunch_presentation'];
    const list = data.filter(event => eventTypeList.includes(event.eventType));
    return (
      list.slice(0, 1)
    );
  }

  getPartyEvents(data) {
    const eventTypeList = ['social',, 'party', 'event', 'other'];
    const list = data.filter(event => eventTypeList.includes(event.eventType));
    return (
      list.slice(0, 1)
    );
  }

  renderEvent() {
    const { data } = this.props;
    const business = this.getBusinessEvents(data);
    const party = this.getPartyEvents(data);
    console.log(data);
    if (party[0]) {
      if (party[0].title) {
        return (
          <div id="all-wrapper">
            <div className="split left">
              <SinglePromotedEvent event={business[0]} className="promotedBusiness" />
            </div>
            <div className="split right">
              <SinglePromotedEvent event={party[0]} className="promotedParty" />
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
