import React, { useState } from 'react';
import AddUser from './components/Users/AddUser';
import UsersList from './components/Users/UsersList';

function App() {
    const[usersList, setUsersList] = useState([]);

    const addUserHandler = user => {
        setUsersList((prevUserList) => {
            return [...prevUserList, user];
        });
    };

  return (
      <div>
          <AddUser onAddUser={addUserHandler} />
          <UsersList users={usersList}/>
    </div>
  );
}

export default App;
