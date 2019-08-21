import React, { Component } from 'react';
import ErrorInformation from '../error-information';

export default class ErrorBoundry extends Component {

  state = {
    hasError: false
  };

  componentDidCatch() {
    this.setState({
      hasError: true
    })
  }

  render() {

    if (this.state.hasError) {
      return <ErrorInformation />
    }

    return this.props.children
  };
}

