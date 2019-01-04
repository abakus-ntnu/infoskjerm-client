import React, { Component } from 'react';
import { connect } from 'react-redux';
import '/busListItem.css';

class busListItem extends Component {
  list_render() {
    const { busNr, endeStopp, tid } = this.props.busItem;
      <div>
        <span>{busNr}</span>
        <span>{endeStopp}</span>
        <span>{tid}</span>
      </div>;
  }

  render() {
    return this.list_render();
  }
}


const busAPI_eksempel = {
  busNr: '', stopp: '', tid: '', endeStopp: '',
};
