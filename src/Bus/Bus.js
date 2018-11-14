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
    console.log(data);
    return (

      <div className="full-grid">
        <h1 className="bus-tb">Til Byen</h1>
        <h2 className="bus-tb-g">Gløshaugen</h2>
        <BusList departureList={data.to.glos} className="tb-g" />
        <h2 className="bus-tb-p">Prof. Brochs Gate</h2>
        <BusList departureList={data.to.prof} className="tb-p" />
        <h1 className="bus-fb">Fra Byen</h1>
        <h2 className="bus-fb-g">Gløshaugen</h2>
        <BusList departureList={data.from.glos} className="fb-g" />
        <h2 className="bus-fb-p">Prof. Brochs Gate</h2>
        <BusList departureList={data.from.prof} className="fb-p" />
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
