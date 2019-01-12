import React, { Component } from 'react';
import { func, object, arrayOf } from 'prop-types';
import { connect } from 'react-redux';
import { fetchEvents } from '../store/modules/events';

class PartyEvents extends Compnent {
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

    getPartyEvents(data) {
      const list = data.filter(event => event.eventType == 'social' || event.eventType == 'party' || event.eventType == 'event' || event.eventType == 'other');
      return (
        list.slice(0, 2)
      );
    }

    render() {
      const { event } = this.props;
      return (
        <div>
          <img src={event.cover} width="300" height="120" alt="Cover" />
          <h1>
            {' '}
            {event.title}
          </h1>
          <h2>{event.location}</h2>
          <h3>{event.startTime}</h3>
        </div>
      );
    }
}
const mapStateToProps = state => ({ data: state.events.data });

const mapDispatchToProps = dispatch => ({
  get: () => dispatch(fetchEvents()),
});

const Events = connect(mapStateToProps, mapDispatchToProps)(EventsComponent);


export default PartyEvents;
