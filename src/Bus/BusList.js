import React from 'react';
import { object, arrayOf } from 'prop-types';
import BusListItem from './BusListItem';

const BusList = ({ departureList = [] }) => (
  <div>
    {departureList.map(
      (departure, idx) => (
        <BusListItem
          key={idx}
          number={departure.number}
          bus={departure.bus}
          time={departure.time}
          realtime={departure.realtime}
        />),
    )}
  </div>
);

BusList.propTypes = {
  departureList: arrayOf(object).isRequired,
};

export default BusList;
