import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  func, shape,
} from 'prop-types';
import BusList from './BusList';
import { fetchBus } from '../store/modules/bus';

class BusComponent extends Component {
  static propTypes = {
    get: func,
    data: shape(),
  }

  static defaultProps = {
    get: () => {},
    data: [],
  }

  componentDidMount() { /*
    const { get } = this.props;
    get();
    */
  }

  renderList() {
    console.log(this.props);
    const { data } = this.props;
    console.log(data);
    return (
      <div>
        <div>
          <h1>Til Byen</h1>
          <h2>Gløshaugen</h2>
          <BusList departureList={data.from.glos} />
          <h2>Prof. Brochs Gate</h2>
          <BusList departureList={data.from.prof} />
        </div>
        <div>
          <h1>Fra Byen</h1>
          <h2>Gløshaugen</h2>
          <BusList departureList={data.to.glos} />
          <h2>Prof. Brochs Gate</h2>
          <BusList departureList={data.to.prof} />
        </div>
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
