import React, { Component } from 'react';
import { string, number, object } from 'prop-types';


class PromotedEvents extends Component {
  static propTypes = {
    index: number.isRequired,
    cover: string.isRequired,
    eventType: string.isRequired,
    location: string.isRequired,
    startTime: string.isRequired,
    totalCapacity: number.isRequired,
    registered: number.isRequired,
    }

  static defaultProps = {
    index: 0,
    cover: "https://abakus.no/7df72c5a291dc020b1d5d191ba50d871.png",
    eventType: 'Social',
    location: 'NTNU',
    startTime: '2019-01-01T00:00:00Z',
    totalCapacity: 0,
    registered: 0,
  } 

  render() {
    const {
    index, cover, eventType, location, startTime, totalCapacity, registered,
    } = this.props;
    return (
      <div id="promoted-event-wrapper">
        <img id="cover" src={cover} alt="Cover" width="300" height="120" />
        <div id="eventType"> {eventType} </div>
        <div id="location"> {location} </div>
        <div id="startTime"> {startTime} </div>
        <div id="totalCapacity"> {totalCapacity} </div>
        <div id="registered"> {registered} </div>
      </div>
    );
  };
};


export default PromotedEvents;
