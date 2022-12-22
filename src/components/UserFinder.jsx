import React, { Component } from 'react';
import Users from './Users';
import UsersContext from '../store/users-context';
import classes from './UserFinder.module.css';
import ErrorBoundary from './ErrorBoundary';

class UserFinder extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filteredUsers: [],
      searchTerm: '',
    };
  }

  componentDidMount() {
    const { users } = this.context;
    // pretend that we fetched some data from the server
    // and then call setState with it
    this.setState({
      filteredUsers: users,
    });
  }

  componentDidUpdate(prevProps, prevState) {
    const { searchTerm } = this.state;
    const { users } = this.context;

    if (prevState.searchTerm !== searchTerm) {
      this.setState({
        filteredUsers: users.filter((user) => user.name.includes(searchTerm)),
      });
    }
  }

  searchChangeHandler = (event) => {
    this.setState({ searchTerm: event.target.value });
  };

  render() {
    const { filteredUsers } = this.state;

    return (
      <div>
        <div className={classes.finder}>
          <input type="search" onChange={this.searchChangeHandler} />
        </div>
        <ErrorBoundary>
          <Users users={filteredUsers} />
        </ErrorBoundary>
      </div>
    );
  }
}

UserFinder.contextType = UsersContext;

// function UserFinder() {
//   const [filteredUsers, setFilteredUsers] = useState(DUMMY_USERS);
//   const [searchTerm, setSearchTerm] = useState('');
//
//   useEffect(() => {
//     setFilteredUsers(
//       DUMMY_USERS.filter((user) => user.name.includes(searchTerm))
//     );
//   }, [searchTerm]);
//
//   const searchChangeHandler = (event) => {
//     setSearchTerm(event.target.value);
//   };
//
//   return (
//     <>
//       <input type="search" onChange={searchChangeHandler} />
//       <Users users={filteredUsers} />
//     </>
//   );
// }

export default UserFinder;
