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
  }

  renderList() {
    console.log(this.props);
    const { data } = this.props;
    return (

      <div className="full-grid">
        <h1 className="bus-til-byen">Til Byen</h1>
        <h2 className="bus-til-byen-fra-glos">Gløshaugen</h2>
        <BusList departureList={data.to.glos} className="til-byen-fra-glos" />
        <h2 className="bus-til-byen-fra-prof">Prof. Brochs Gate</h2>
        <BusList departureList={data.to.prof} className="til-byen-fra-prof" />
        <h1 className="bus-fra-byen">Fra Byen</h1>
        <h2 className="bus-til-glos-fra-byen">Gløshaugen</h2>
        <BusList departureList={data.from.glos} className="fra-byen-til-glos" />
        <h2 className="bus-til-prof-fra-byen">Prof. Brochs Gate</h2>
        <BusList departureList={data.from.prof} className="fra-byen-til-prof" />
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

const mapStateToProps = state => ({ data: state.bus.data });

const mapDispatchToProps = dispatch => ({ get: () => dispatch(fetchBus()) });

const Bus = connect(mapStateToProps, mapDispatchToProps)(BusComponent);

export default Bus;
