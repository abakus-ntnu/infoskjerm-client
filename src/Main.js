import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateWidget } from './Redux/modules/widgets';

class MainComponent extends Component {
  handleChange = (event) => {
    const { update } = this.props;
    update(event.target.value);
  }

  render() {
    const { title } = this.props;
    return (
      <div>
          {title}
        <input type="text" name="title" value={title} onChange={this.handleChange} />
      </div>
    );
  }
}

const mapStateToProps = state => ({ title: state.input });

const mapDispatchToProps = dispatch => ({
  update: (title) => {
    dispatch({ type: 'UPDATE', widget: title });
  },
});

const Main = connect(mapStateToProps, mapDispatchToProps)(MainComponent);

export default Main;
