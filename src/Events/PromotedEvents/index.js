import React, { Component } from 'react';
import { object, arrayOf } from 'prop-types';
import SinglePromotedEvent from './SinglePromotedEvent';
import './PromotedEvents.css';

class PromotedEventsComponent extends Component {
  static propTypes = {
    events: arrayOf(object),
  }

  static defaultProps = {
    events: [],
  }


  renderEvent() {
    const { events } = this.props;
    return (
      <div id="all-wrapper">
        <div className="split left marble-background">
          <SinglePromotedEvent event={events[0]} className="promotedBusiness" />
        </div>
        <div className="split right marble-background">
          <SinglePromotedEvent event={events[1]} className="promotedParty" />
        </div>
      </div>
    );
  }


  render() {
    return (
      <div id="promoted-party-event">
        {this.renderEvent()}
      </div>
    );
  }
}


export default PromotedEventsComponent;
