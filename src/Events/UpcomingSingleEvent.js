import React from 'react';
import './UpcomingEvents.css';

function getCapacity(totalCapacity, registrationCount) {
  return (totalCapacity === 0 ? 'Ingen påmelding!' : `${registrationCount}/${totalCapacity} påmeldt`);
}

function getTitleLineColor(eventType) {
  const eventNames = {
    company_presentation: 'green', course: 'blue', KID_event: 'green', lunch_presentation: 'green', social: 'red', party: 'yellow', event: 'red', other: 'black',
  };
  return eventNames[eventType];
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
      <h1 className="title">{title}</h1>
      <div className={`title-line ${getTitleLineColor(eventType)}`} />
      <div className="start-time">{startTime}</div>
      <div className="capacity">{getCapacity(totalCapacity, registrationCount)}</div>
    </div>
  );
};

export default SingleSignupEvent;
