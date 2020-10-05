import React from 'react';
import './UpcomingEvents.css';
import {
  dateToFormattedDate,
  dateToFormattedTime,
} from '../../components/Time/eventTime';

function getCapacity(totalCapacity, registrationCount) {
  return totalCapacity === 0
    ? 'Ingen påmelding!'
    : `${registrationCount}/${totalCapacity} påmeldt`;
}

function getTitleLineColor(eventType) {
  const eventNames = {
    company_presentation: 'green',
    course: 'blue',
    KID_event: 'green',
    lunch_presentation: 'green',
    social: 'red',
    party: 'yellow',
    event: 'red',
    other: 'black',
    alternative_presentation: 'purple',
  };
  return eventNames[eventType];
}

const SingleSignupEvent = ({ event }) => {
  const {
    id = 0,
    title = 'Tittel',
    eventType = 'EventType',
    startTime = new Date().toJSON(),
    totalCapacity = 0,
    registrationCount = 0,
  } = event;

  return (
    <div
      className={`single-event-wrapper border-${getTitleLineColor(eventType)}`}
      key={id}
    >
      <h1 className="event-title">{title}</h1>
      <div className="event-information">
        {dateToFormattedDate(startTime)}
        {' '}
        {dateToFormattedTime(startTime)}
        {' '}
|
        {' '}
        {getCapacity(totalCapacity, registrationCount)}
      </div>
    </div>
  );
};

export default SingleSignupEvent;
