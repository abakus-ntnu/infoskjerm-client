import React, { Component } from 'react';
import { object, arrayOf } from 'prop-types';
import EventListItem from './EventListItem';

class EventList extends Component {
  static propTypes = {
    data: arrayOf(object),
  }

  static defaultProps = {
    data: [],
  }

  render() {
    const { data } = this.props;
    return data.map(event => (
      <div>
        <EventListItem data={event} />
      </div>
    ));
  }
}

export default EventList;
