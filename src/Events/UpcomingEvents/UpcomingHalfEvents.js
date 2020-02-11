import React from "react";
import UpcomingSingleEvent from "./UpcomingSingleEvent";
import "./UpcomingEvents.css";

const HalfSignupEvents = ({ events, title }) => (
  <div>
    <h1 className="title">{title}</h1>
    <UpcomingSingleEvent event={events[0]} />
    <UpcomingSingleEvent event={events[1]} />
    <UpcomingSingleEvent event={events[2]} />
  </div>
);

export default HalfSignupEvents;
