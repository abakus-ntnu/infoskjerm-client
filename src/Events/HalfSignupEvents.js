import React from 'react';
import SingleSignupEvent from './SingleSignupEvent';
import './SignUpEvents.css';

const HalfSignupEvents = ({ events }) => {
  return (
    <div className="half-wrapper">
      <SingleSignupEvent className="first" event={events[0]} />
      <SingleSignupEvent className="second" event={events[1]} />
      <SingleSignupEvent className="third" event={events[2]} />
    </div>
  );
};


export default HalfSignupEvents;
