import React, { Component } from 'react';
import { string } from 'prop-types';
import './PromotedEvents.css';


const SinglePromotedEvent = ({ event }) => {
  const {
    id = 0,
    cover = 'https://abakus.no/7df72c5a291dc020b1d5d191ba50d871.png',
    title = 'Tittel',
    eventType = 'EventType',
    location = 'NTNU',
    startTime =
    '2019-01-01T00:00:00Z',
    totalCapacity = 0,
    registered = 0,
  } = event;

  return (
    <div id="promoted-event-wrapper" key={id}>
      <img id="cover" src={cover} alt="Cover" width="300" height="120" />
      <div id="title">
        {title}
      </div>
      <div id="eventType">
        {eventType}
      </div>
      <div id="location">
        {location}
      </div>
      <div id="startTime">
        {startTime}
      </div>
      <div id="totalCapacity">
        {totalCapacity}
      </div>
      <div id="registered">
        {registered}
      </div>
    </div>
  );
};

export default SinglePromotedEvent;
