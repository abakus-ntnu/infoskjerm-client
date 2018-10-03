import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchEvents, updateWidget } from './Redux/modules/widgets';

class MainComponent extends Component {
  componentDidMount() {
    const { get } = this.props;
    get();
  }

  renderList() {
    const { data } = this.props;
    return data.map(event => (
      <div key={event.id}>
        <h3>{event.title}</h3>
        <h4>{event.description}</h4>
        <img src={event.cover} width="300" height="120" alt="Cover" />
      </div>
    ));
  }

  render() {
    return (
      <div>
        {this.renderList()}
        <p>sponset av IDI</p>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log(state);
  return { data: state.data };
};

const mapDispatchToProps = dispatch => ({
  get: () => dispatch(fetchEvents()),
});

const Main = connect(mapStateToProps, mapDispatchToProps)(MainComponent);

export default Main;
