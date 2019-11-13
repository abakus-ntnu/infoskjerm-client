import React from 'react';
import UpcomingSingleEvent from './UpcomingSingleEvent';
import './UpcomingEvents.css';

const HalfSignupEvents = ({ events }) => (
  <div className="half-wrapper">
    {events.map(event => (
      <UpcomingSingleEvent event={event} />
    ))}
  </div>
);


export default HalfSignupEvents;
