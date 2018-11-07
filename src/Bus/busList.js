import React, { Component } from 'react';
import { connect } from 'react-redux';
import busListItem from 'busListItem';
import { object, arrayOf } from 'prop-types';


class busList extends Component {

  static propTypes = {
    departureList: arrayOf(object);
  }

  static defaultProps = {
    departureList: [],
  }

  render() {
    const { departureList } = this.props;
    return (
      <div>
        {departureList.map(departure => <busListItem line={departure.line} destination={departure.destination} timeToDeparture={departure.timeToDeparture} isRealTime={departure.isRealTime} />)}
      </div>
    );
  }
        
    render() {
        return (
            <div>
                {props.departureList.map(departure => <busListItem key={departure.id} busNr={departure.busNr} endeStopp={departure.endeStopp} tid={departure.tid} />)}
            </div> 
            );
    }
}

export default busList;
