import React, { Component } from 'react';
import { connect } from 'react-redux';
import { func, string } from 'prop-types';
import { fetchBus } from './store/modules/bus'

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
    <div>
      <busList departureList=data/>
    </div>
  }

  render() {
    return (
      <div>
        {this.renderList()}
      </div>
    );
  }
}

const mapStateToProps = state => { data: state.data };

const mapDispatchToProps = dispatch => {get: () => dispatch(fetchBus())};

const Bus = connect(mapStateToProps, mapDispatchToProps)(BusComponent);

export default Bus;
