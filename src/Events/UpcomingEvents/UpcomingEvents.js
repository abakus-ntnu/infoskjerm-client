import React, { Component } from "react";
import { func, arrayOf, object } from "prop-types";
import { connect } from "react-redux";
import { fetchEvents } from "../../store/modules/events";
import UpcomingHalfEvents from "./UpcomingHalfEvents";
import "./UpcomingEvents.css";

class UpcomingEventsComponent extends Component {
  static propTypes = {
    get: func,
    data: arrayOf(object)
  };

  static defaultProps = {
    get: () => {},
    data: []
  };

  componentDidMount() {
    const { get } = this.props;
    get();
  }

  getBusinessEvents = data => {
    const eventTypeList = [
      "company_presentation",
      "course",
      "KID_event",
      "lunch_presentation",
      "alternative_presentation"
    ];
    const list = data.filter(event => eventTypeList.includes(event.eventType));
    return list.slice(0, 3);
  };

  getPartyEvents = data => {
    const eventTypeList = ["social", "party", "event", "other"];
    const list = data.filter(event => eventTypeList.includes(event.eventType));
    return list.slice(0, 3);
  };

  renderEvent() {
    const { data } = this.props;
    if (data[0]) {
      if (data[0].title) {
        return (
          <div>
            <p className="main-title">KALENDER</p>
            <div className="upcoming-wrapper">
              <div className="split left">
                <UpcomingHalfEvents
                  events={this.getBusinessEvents(data)}
                  title={"Bedriftspresentasjon & Kurs"}
                />
              </div>
              <div className="split right">
                <UpcomingHalfEvents
                  events={this.getPartyEvents(data)}
                  title={"Sosialarrangement"}
                />
              </div>
            </div>
          </div>
        );
      }
    }
    return (
      <div>
        <div className="split left">
          {/* <HalfSignupEvents events={this.getSignupEvents(data)} className="half" /> */}
        </div>
        <div className="split right">
          {/* <HalfSignupEvents events={data.slice(0, 3)} className="half" /> */}
        </div>
      </div>
    );
  }

  render() {
    return <React.Fragment>{this.renderEvent()}</React.Fragment>;
  }
}

const mapStateToProps = state => ({ data: state.events.data });

const mapDispatchToProps = dispatch => ({
  get: () => dispatch(fetchEvents())
});

const UpcomingEvents = connect(
  mapStateToProps,
  mapDispatchToProps
)(UpcomingEventsComponent);

export default UpcomingEvents;
