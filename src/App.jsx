import React, { Component } from 'react';
import UserFinder from './components/UserFinder';
import UsersContext from './store/users-context';

const DUMMY_USERS = [
  { id: 'u1', name: 'Max' },
  { id: 'u2', name: 'Manuel' },
  { id: 'u3', name: 'Julie' },
];

const usersContext = {
  users: DUMMY_USERS,
};

// eslint-disable-next-line react/prefer-stateless-function
class App extends Component {
  render() {
    return (
      <UsersContext.Provider value={usersContext}>
        <UserFinder />
      </UsersContext.Provider>
    );
  }
}

// function App() {
//   const usersContext = {
//     users: DUMMY_USERS,
//   };
//
//   return (
//     <UsersContext.Provider value={usersContext}>
//       <UserFinder />
//     </UsersContext.Provider>
//   );
// }

export default App;
