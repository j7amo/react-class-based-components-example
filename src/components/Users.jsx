import React, { Component } from 'react';
import * as PropTypes from 'prop-types';

import classes from './Users.module.css';
import User from './User';

class Users extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showUsers: true,
    };
  }

  componentDidUpdate() {
    const { users } = this.props;

    if (users.length === 0) {
      throw new Error('No users provided!');
    }
  }

  toggleUsersHandler = () => {
    this.setState((curState) => ({
      showUsers: !curState.showUsers,
    }));
  };

  render() {
    const { showUsers } = this.state;
    const { users } = this.props;

    const usersList = (
      <ul>
        {users.map((user) => (
          <User key={user.id} name={user.name} />
        ))}
      </ul>
    );

    return (
      <div className={classes.users}>
        <button onClick={this.toggleUsersHandler} type="button">
          {showUsers ? 'Hide' : 'Show'}
          {' '}
          Users
        </button>
        {showUsers && usersList}
      </div>
    );
  }
}

// function Users() {
//   const [showUsers, setShowUsers] = useState(true);
//
//   const toggleUsersHandler = () => {
//     setShowUsers((curState) => !curState);
//   };
//
//   const usersList = (
//     <ul>
//       {DUMMY_USERS.map((user) => (
//         <User key={user.id} name={user.name} />
//       ))}
//     </ul>
//   );
//
//   return (
//     <div className={classes.users}>
//       <button onClick={toggleUsersHandler} type="button">
//         {showUsers ? 'Hide' : 'Show'} Users
//       </button>
//       {showUsers && usersList}
//     </div>
//   );
// }

Users.propTypes = {
  users: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default Users;
