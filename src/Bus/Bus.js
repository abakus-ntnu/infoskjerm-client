import React, { Component } from 'react';
import { connect } from 'react-redux';
import { func, string } from 'prop-types';
import { fetchBus } from './store/modules/bus';
import busList from 'busList'

class BusComponent extends Component {
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
    return (
      <div>
        <div>
          <h1>Til Byen</h1>
          <h2>Gløshaugen</h2>
          <busList departureList={data.to.glos} />
          <h2>Prof. Brochs Gate</h2>
          <busList departureList={data.to.prof} />
        </div>
        <div>
          <h1>Fra Byen</h1>
          <h2>Gløshaugen</h2>
          <busList departureList={data.from.glos} />
          <h2>Prof. Brochs Gate</h2>
          <busList departureList={data.from.prof} />
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

const mapStateToProps = (state) => { state.data; };

const mapDispatchToProps = (dispatch) => { () => dispatch(fetchBus()); };

const Bus = connect(mapStateToProps, mapDispatchToProps)(BusComponent);

export default Bus;
