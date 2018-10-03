import React, { Component } from 'react';
import { connect } from 'react-redux';
import { func, string } from 'prop-types';
import { fetchEvents } from '../store/modules/events';

class EventsComponent extends Component {
  static propTypes = {
    get: func,
    data: [string],
  }

  static defaultProps = {
    get: () => {},
    data: [],
  }

  componentDidMount() {
    const { get } = this.props;
    get();
  }

  renderList() {
    const { data } = this.props;
    return data.map(event => (
      <div key={event.id}>
        <h3>{event.title}</h3>
        <h4>{event.description}</h4>
        <img src={event.cover} width="300" height="120" alt="Cover" />
      </div>
    ));
  }

  render() {
    return (
      <div>
        {this.renderList()}
      </div>
    );
  }
}

const mapStateToProps = state => ({ data: state.data });

const mapDispatchToProps = dispatch => ({
  get: () => dispatch(fetchEvents()),
});

const Events = connect(mapStateToProps, mapDispatchToProps)(EventsComponent);

export default Events;
