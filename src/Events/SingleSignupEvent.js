import React from 'react';
import './SignUpEvents.css';


const SingleSignupEvent = ({ event }) => {
  const {
    id = 0,
    title = 'Tittel',
    registrationTime = null,
    eventType = 'EventType',
  } = event;

  return (
    <div className="signup-wrapper" key={id}>
      <div className={`event-type-line ${eventType}`}>Lag funksjon og endre className til å returnere fargen for event-typen</div>
      <h1 className="title">{title}</h1>
      <div className="registrationTime">{registrationTime}</div>
    </div>
  );
};

export default SingleSignupEvent;
