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
    const list = data.filter(event => event.eventType == 'company_presentation' || event.eventType == 'course' || event.eventType == 'KID_event' || event.eventType == 'lunch_presentation');
    return (
      list.slice(0, 1)
    );
  }

  getPartyEvents(data) {
    const list = data.filter(event => event.eventType == 'social' || event.eventType == 'party' || event.eventType == 'event' || event.eventType == 'other');
    return (
      list.slice(0, 1)
    );
  }

  renderEvent() {
    const { data } = this.props;
    const business = this.getBusinessEvents(data);
    const party = this.getPartyEvents(data);
    return (
      <div id="all-wrapper">
        <div className="split left">
          <SinglePromotedEvent event={business} className="promotedBusiness" />
        </div>
        <div className="split right">
          <SinglePromotedEvent event={party} className="promotedParty" />
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
