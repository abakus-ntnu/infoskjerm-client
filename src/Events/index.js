import React, { Component } from 'react';
import { connect } from 'react-redux';
import { func, object, arrayOf } from 'prop-types';
import { fetchEvents } from '../store/modules/events';
import './Events.css';
import PromotedEvents from './PromotedEvents';

// eventType = "social", "party", "event", "other"
// "company_presentation", "course", "KID_event", "lunch_presentation"


class EventsComponent extends Component {
  static propTypes = {
    get: func,
    data: arrayOf(object),
  }

  static defaultProps = {
    get: () => {},
    data: [],
  }

  getBusinessEvents(data) {
    const list = data.filter(event => event.eventType === 'company_presentation' || event.eventType === 'course' || event.eventType === 'KID_event' || event.eventType === 'lunch_presentation');
    return (
      list.slice(0, 4)
    );
  }

  getPartyEvents(data) {
    const list = data.filter(event => event.eventType === 'social' || event.eventType === 'party' || event.eventType === 'event' || event.eventType === 'other');
    return (
      list.slice(0, 2)
    );
  }

  componentDidMount() {
    const { get } = this.props;
    get();
  }

  renderList() {
    const { data } = this.props;
    return data.map((event, index) => (
      <PromotedEvents
        key={index.toString()}
        cover={event.cover}
        title={event.title}
        eventType={event.eventType}
        location={event.location}
        startTime={event.startTime}
        totalCapacity={event.totalCapacity}
        registered={event.registered}
      />
    ));
  }

  render() {
    return (
      <div id="all-events-wrapper">
        {this.renderList()}
      </div>
    );
  }
}

const mapStateToProps = state => ({ data: state.events.data });

const mapDispatchToProps = dispatch => ({
  get: () => dispatch(fetchEvents()),
});

const Events = connect(mapStateToProps, mapDispatchToProps)(EventsComponent);

export default Events;
