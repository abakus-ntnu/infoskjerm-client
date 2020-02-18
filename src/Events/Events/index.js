import React, { Component } from 'react';
import { connect } from 'react-redux';
import { func, object, arrayOf } from 'prop-types';
import { fetchEvents } from '../../store/modules/events';
import './Events.css';
import PromotedEvents from '../PromotedEvents';

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

  renderList() {
    const { data } = this.props;
    const eventList = this.getSignupEvents(data);
    if (data.length !== 0) {
      return (
        <PromotedEvents
          events={eventList}
        />
      );
    }
    return <div>hjelp</div>;
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
