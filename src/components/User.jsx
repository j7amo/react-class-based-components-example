import React, { Component } from 'react';
import * as PropTypes from 'prop-types';
import classes from './User.module.css';

// eslint-disable-next-line react/prefer-stateless-function
class User extends Component {
  componentWillUnmount() {
    console.log('User will unmount');
  }

  render() {
    const { name } = this.props;

    return <li className={classes.user}>{name}</li>;
  }
}

// function User(props) {
//   const { name } = props;
//
//   return <li className={classes.user}>{name}</li>;
// }

User.propTypes = {
  name: PropTypes.string.isRequired,
};

export default User;
