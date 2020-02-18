import React, { Component } from 'react';
import { string } from 'prop-types';
import './PromotedEvents.scss';
import { dateToFormattedDate, dateToFormattedTime } from '../../components/Time/eventTime';

function getCapacity(totalCapacity, registrationCount) {
  return (totalCapacity === 0 ? 'Ingen påmelding!' : `${registrationCount}/${totalCapacity} påmeldt`);
}

function getEventType(eventType) {
  const eventNames = {
    company_presentation: 'Bedriftspresentasjon', course: 'Kurs', KID_event: 'KID', lunch_presentation: 'Lunchpresentasjon', social: 'Sosialt', party: 'Fest', event: 'Arrangement', alternative_presentation: 'Alternativ bedpres', other: 'Annet',
  };
  return eventNames[eventType];
}

function getTitleLineColor(eventType) {
  const eventNames = {
    company_presentation: 'green', course: 'blue', KID_event: 'green', lunch_presentation: 'green', social: 'red', party: 'yellow', event: 'red', alternative_presentation: 'purple', other: 'black',
  };
  return eventNames[eventType];
}

const SinglePromotedEvent = ({ event }) => {
  const {
    id = 0,
    cover = 'https://abakus.no/7df72c5a291dc020b1d5d191ba50d871.png',
    title = 'Tittel',
    eventType = 'EventType',
    location = 'NTNU',
    startTime =
    new Date().toJSON(),
    registrationTime = null,
  } = event;

  return (
    <div id="promoted-event-wrapper" key={id}>
      <img className="cover" src={cover} alt="Cover" />
      <div className={`title-line ${getTitleLineColor(eventType)}`} />
      <div className="text-wrapper">
        <div className="event-text">
          <h1 className="promoted-event-title">
            {title.toUpperCase()}
          </h1>
        </div>
        <div className="event-text medium-text-size">
          {dateToFormattedDate(startTime)}
          {'  '}
          {dateToFormattedTime(startTime)}
          { ' | ' }
          {location}
          { ' | ' }
          {getEventType(eventType)}
        </div>
        <div className="event-text small-text-size">
        Påmelding åpner:
          {' '}
          <span className="red">
            {dateToFormattedDate(registrationTime)}
            {' '}
            {dateToFormattedTime(registrationTime)}

          </span>
        </div>
      </div>
    </div>
  );
};

export default SinglePromotedEvent;
