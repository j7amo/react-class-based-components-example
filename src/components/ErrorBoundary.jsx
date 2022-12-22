import React, { Component } from 'react';
import * as PropTypes from 'prop-types';

// ErrorBoundary is a way of replicating try-catch in JSX:
// we define it like this and wrap any component we want
// and if an error occurs in this component it will be caught here
// and our app won't crash (= profit)
class ErrorBoundary extends Component {
  // this is 100% optional, but we can use something like this
  // to execute different branches of code depending on error state
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
    };
  }

  // this method will be called when one of child components throws an error
  // and this error will bubble up to this ErrorBoundary component
  componentDidCatch() {
    this.setState({
      hasError: true,
    });
  }

  render() {
    const { children } = this.props;
    const { hasError } = this.state;

    if (hasError) {
      return <p>Something went wrong!</p>;
    }

    return children;
  }
}

ErrorBoundary.propTypes = {
  children: PropTypes.func.isRequired,
};

export default ErrorBoundary;
