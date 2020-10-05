import React, { Component } from 'react';
import { connect } from 'react-redux';
import { func, shape } from 'prop-types';
import BusList from './BusList';
import { fetchBus } from '../store/modules/bus';
import './bus.css';
import '../Main.css';

// TODO; only get three bustimes in eg data.glos.to

class BusComponent extends Component {
  static propTypes = {
    get: func,
    data: shape(),
  };

  static defaultProps = {
    get: () => {},
    data: [],
  };

  componentDidMount() {
    const { get } = this.props;
    get();
    setInterval(() => get(), 10000);
  }

  renderList() {
    const { data } = this.props;
    return (
      <div>
        <p className="main-title">BUSS</p>
        <div className="full-grid">
          <div className="grid-item">
            <p className="stop-title">
              {console.log(data)}
              Gløshaugen
              {' '}
              <span>til sentrum</span>
            </p>
            <div className="bus-list">
              <BusList departureList={data.glos.to} />
            </div>
          </div>
          <div className="grid-item">
            <p className="stop-title">
              Hesthagen
              {' '}
              <span>til sentrum</span>
            </p>
            <div className="bus-list">
              <BusList departureList={data.hest.to} />
            </div>
          </div>
          <div className="grid-item">
            <p className="stop-title">
              Gløshaugen
              {' '}
              <span>fra sentrum</span>
            </p>
            <div className="bus-list">
              <BusList departureList={data.glos.from} />
            </div>
          </div>
          <div className="grid-item">
            <p className="stop-title">
              Hesthagen
              {' '}
              <span>fra sentrum</span>
            </p>
            <div className="bus-list">
              <BusList departureList={data.hest.from} />
            </div>
          </div>
        </div>
      </div>
    );
  }

  render() {
    return <React.Fragment>{this.renderList()}</React.Fragment>;
  }
}

const mapStateToProps = state => ({ data: state.bus.data });

const mapDispatchToProps = dispatch => ({ get: () => dispatch(fetchBus()) });

const Bus = connect(
  mapStateToProps,
  mapDispatchToProps,
)(BusComponent);

export default Bus;
