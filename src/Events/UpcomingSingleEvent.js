import React from 'react';
import './UpcomingEvents.css';

function getCapacity(totalCapacity, registrationCount) {
  return (totalCapacity === 0 ? 'Ingen påmelding!' : `${registrationCount}/${totalCapacity} påmeldt`);
}

const SingleSignupEvent = ({ event }) => {
  const {
    id = 0,
    title = 'Tittel',
    eventType = 'EventType',
    startTime =
    new Date().toJSON(),
    totalCapacity = 0,
    registrationCount = 0,
  } = event;

  return (
    <div className="signup-wrapper" key={id}>
      <div className={`event-type-line ${eventType}`}>.</div>
      <h1 className="title">{title}</h1>
      <div className="start-time">{startTime}</div>
      <div className="capacity">{getCapacity(totalCapacity, registrationCount)}</div>
    </div>
  );
};

export default SingleSignupEvent;
