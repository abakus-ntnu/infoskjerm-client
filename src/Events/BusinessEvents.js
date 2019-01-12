import React, { Component } from 'react';
import { func, object, arrayOf } from 'prop-types';
import { connect } from 'react-redux';
import EventList from './EventList';
import { fetchEvents } from '../store/modules/events';


class BusinessEventsComponent extends Component {
  static propTypes = {
    get: func,
    data: arrayOf(object),
  }

  static defaultProps = {
    get: () => { },
    data: [],
  }

  componentDidMount() {
    const { get } = this.props;
    get();
  }


  render() {
    const { data } = this.props;
    const events = getBusinessEvents(data);
    return (
      <div>
        <EventList data={events.length < 2 ? events : events.slice(0, 2)} />
        <EventList data={events.length < 4 ? events : events.slice(2, 4)} />
      </div>
    );
  }
}

const mapStateToProps = state => ({ data: state.events.data });

const mapDispatchToProps = dispatch => ({
  get: () => dispatch(fetchEvents()),
});

const BusinessEvents = connect(mapStateToProps, mapDispatchToProps)(BusinessEventsComponent);

function getBusinessEvents(data) {
  console.log(data);
  const list = data.filter(event => event.eventType === 'company_presentation'
    || event.eventType === 'course'
    || event.eventType === 'KID_event'
    || event.eventType === 'lunch_presentation');
  return list.length < 4 ? list : list.slice(0, 4);
}

export default BusinessEvents;
