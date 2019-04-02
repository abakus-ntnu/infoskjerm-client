import React from 'react';
import './UpcomingEvents.css';

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
