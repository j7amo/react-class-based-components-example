import React from 'react';
import * as PropTypes from 'prop-types';
import classes from './User.module.css';

function User(props) {
  const { name } = props;

  return <li className={classes.user}>{name}</li>;
}

User.propTypes = {
  name: PropTypes.string.isRequired,
};

export default User;
