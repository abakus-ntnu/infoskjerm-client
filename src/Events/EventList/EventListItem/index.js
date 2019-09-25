import React, { Component } from 'react';
import { object, arrayOf } from 'prop-types';

class EventListItem extends Component {
    static propTypes = {
      data: arrayOf(object),
    }

    static defaultProps = {
      data: [],
    }

    renderList() {
      const { data } = this.props;
      return (
        <div>
          <img src={data.cover} width="150" height="60" alt="Cover" />
          <h1>
            {data.title}
          </h1>
          <h2>
            {data.startTime}
          </h2>
        </div>
      );
    }

    render() {
      return (
        <div>
          {this.renderList()}
        </div>
      );
    }
}

export default EventListItem;
