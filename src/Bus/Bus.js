import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  func, shape,
} from 'prop-types';
import BusList from './BusList';
import { fetchBus } from '../store/modules/bus';
import './bus.css';

class BusComponent extends Component {
  static propTypes = {
    get: func,
    data: shape(),
  }

  static defaultProps = {
    get: () => { },
    data: [],
  }

  componentDidMount() {
    const { get } = this.props;
    get();
    setInterval(()=> get(), 10000);
  }

  renderList() {
    const { data } = this.props;
    return (
      <div className="full-grid">
        <h1 id="bus-til-byen">Til Byen</h1>
        <h2 id="bus-til-byen-fra-glos" className="stopTitle">Gløshaugen</h2>
        <BusList departureList={data.to.gloshaugen} className="bus-list" id="til-byen-fra-glos" />
        <h2 id="bus-til-byen-fra-prof" className="stopTitle">Hesthagen</h2>
        <BusList departureList={data.from.gloshaugen} className="bus-list" id="fra-byen-til-glos" />

        <h1 id="bus-fra-byen">Fra Byen</h1>
        <h2 id="bus-til-glos-fra-byen" className="stopTitle">Gløshaugen</h2>
        <BusList departureList={data.to.hesthagen} className="bus-list" id="til-byen-fra-prof" />
        <h2 id="bus-til-prof-fra-byen" className="stopTitle">Hesthagen</h2>
        <BusList departureList={data.from.hesthagen} className="bus-list" id="fra-byen-til-prof" />
      </div>
    );
  }

  render() {
    return (
      <React.Fragment>
        {this.renderList()}
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({ data: state.bus.data });

const mapDispatchToProps = dispatch => ({ get: () => dispatch(fetchBus()) });

const Bus = connect(mapStateToProps, mapDispatchToProps)(BusComponent);

export default Bus;
