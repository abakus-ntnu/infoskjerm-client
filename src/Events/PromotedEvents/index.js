import React, { Component } from 'react';
import { object, arrayOf } from 'prop-types';
import SinglePromotedEvent from './SinglePromotedEvent';
import './PromotedEvents.scss';

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

        <div className="split left">
          <SinglePromotedEvent event={events[0]} className="promotedBusiness" />
        </div>
        <div className="split right">
          <SinglePromotedEvent event={events[1]} className="promotedParty" />
        </div>
      </div>
    );
  }


  render() {
    return (
      <div className="promoted-wrapper">
        <div className="title-header">
          <h1>PÅMELDINGER</h1>
        </div>
        {this.renderEvent()}
      </div>
    );
  }
}


export default PromotedEventsComponent;
