import React, { Component } from 'react';
import { string } from 'prop-types';

class SignUpEvents extends Component {
  static propTypes = {
    title: string.isRequired,
  }

  static defaultProps = {
    title: 'EventTitle',
  }

  render() {
    const { title } = this.props;
    
    return(
      <h4>{title}</h4>
    )
  }




}
