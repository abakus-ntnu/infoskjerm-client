import React, { Component } from 'react';
import { connect } from 'react-redux';
import { func, string } from 'prop-types';
import { fetchBus } from '../store/modules/bus';
import './Bus.css';


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
    // Add displayed data
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
