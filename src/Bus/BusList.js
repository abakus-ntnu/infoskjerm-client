import React, { Component } from 'react';
import { connect } from 'react-redux';
import { object, arrayOf } from 'prop-types';
import BusListItem from './BusListItem';


class BusList extends Component {
  static propTypes = {
    departureList: arrayOf(object),
  }

  static defaultProps = {
    departureList: [],
  }

  render() {
    const { departureList } = this.props;
    return (
      <div>
        {departureList.map(
          (departure, idx) => (
            <BusListItem
              key={idx}
              line={departure.line}
              destination={departure.destination}
              timeUntilDeparture={departure.timeUntilDeparture}
              isRealtimeData={departure.isRealtimeData}
            />
          ),
        )}
      </div>
    );
  }
}

export default BusList;
