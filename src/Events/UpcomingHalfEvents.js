import React from 'react';
import UpcomingSingleEvent from './UpcomingSingleEvent';
import './UpcomingEvents.css';

const HalfSignupEvents = ({ events }) => (
  <div className="half-wrapper">
    <UpcomingSingleEvent className="first" event={events[0]} />
    <UpcomingSingleEvent className="second" event={events[1]} />
    <UpcomingSingleEvent className="third" event={events[2]} />
  </div>
);


export default HalfSignupEvents;
