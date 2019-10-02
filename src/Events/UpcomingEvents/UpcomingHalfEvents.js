import React from 'react';
import UpcomingSingleEvent from './UpcomingSingleEvent';
import './UpcomingEvents.css';

const HalfSignupEvents = ({ events }) => (
  <div className="half-wrapper">
    <UpcomingSingleEvent event={events[0]} />
    <UpcomingSingleEvent event={events[1]} />
    <UpcomingSingleEvent event={events[2]} />
  </div>
);


export default HalfSignupEvents;
