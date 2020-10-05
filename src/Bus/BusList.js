import React from 'react';
import { object, arrayOf } from 'prop-types';
import BusListItem from './BusListItem';
import './bus.css';

const BusList = ({ departureList = [] }) => (
  <div>
    {departureList.slice(0, 3).map((departure, idx) => (
      <BusListItem
        key={idx}
        index={idx}
        number={departure.number}
        bus={departure.bus}
        time={departure.time}
        realtime={departure.realtime}
      />
    ))}
  </div>
);

BusList.propTypes = {
  departureList: arrayOf(object).isRequired,
};

export default BusList;
