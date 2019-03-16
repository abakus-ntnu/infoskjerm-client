import React, { Component } from 'react';
import { string } from 'prop-types';
import './PromotedEvents.css';

const dateToFormattedHours = (date) => {
  const hours = date.getHours();
  return hours.toString().length <= 1 ? `0${hours}` : hours;
};

const dateToFormattedMinutes = (date) => {
  const minutes = date.getMinutes();
  return minutes.toString().length <= 1 ? `0${minutes}` : minutes;
};

const dateToFormattedTime = (isoString) => {
  const date = new Date(isoString);
  let timeString = '';
  timeString += `${dateToFormattedHours(date)}:`;
  timeString += `${dateToFormattedMinutes(date)}`;
  return timeString;
};

const dateToMonth = (date) => {
  const months = ['januar', 'februar', 'mars', 'april', 'mai', 'juni', 'juli', 'august', 'september', 'oktober', 'november', 'desember'];
  return months[date.getMonth()];
};

const dateToFormattedDate = (isoString) => {
  const date = new Date(isoString);
  const formattedDate = `${date.getDate()}. ${dateToMonth(date)}`;
  return formattedDate;
};

function getCapacity(totalCapacity, registrationCount) {
  return (totalCapacity === 0 ? 'Ingen påmelding!' : `${registrationCount}/${totalCapacity} påmeldt`);
}

function getEventType(eventType) {
  return undefined;
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
    totalCapacity = 0,
    registrationCount = 0,
  } = event;
  console.log(event);
  console.log(event.registered);


  return (
    <div id="promoted-event-wrapper" key={id}>
      <img id="cover" src={cover} alt="Cover" width="300" height="120" />
      <h1 id="title">
        {title}
      </h1>
      <div className="event-text">
        {eventType}
      </div>
      <div className="event-text">
        {location}
      </div>
      <div className="event-text" id="date">
        {dateToFormattedDate(startTime)}
      </div>
      <div className="event-text" id="time">
        {dateToFormattedTime(startTime)}
      </div>
      <div className="event-text">
        {getCapacity(totalCapacity, registrationCount)}
      </div>
    </div>
  );
};

export default SinglePromotedEvent;
