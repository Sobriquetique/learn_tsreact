import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { useDispatch } from 'react-redux';
import { USER_TYPE } from './store/UserReducer';
import UserDisplay from './UserDisplay';

function App() {
  const [userId, setUserId] = useState(0);
  const dispatch = useDispatch();

  const onInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserId(event.target.value ? Number(event.target.value) : 1);
  };

  const onChangeUserID = async () => {
    
    const userIdFromInput = userId;
    
    const userResponse = await fetch(`https://jsonplaceholder.typicode.com/users`);
    if (userResponse.ok) {
      const users = await userResponse.json();
      console.log("Users: %o", users);
      const usr = users.find((userItem: any) => {
        return userItem && userItem.id === userIdFromInput;
      });
      console.log("usr: ", usr);

      dispatch({
        type: USER_TYPE,
        payload: {
          id: usr.id,
          username: usr.username,
          email: usr.email, 
          city: usr.address.city,
        }
      });
    }
  };

  return (
    <div className="App">
      <label>user id</label>
      <input placeholder="type a number" onChange={onInput}></input>
      <button onClick={onChangeUserID}>Fetch user</button>

      <UserDisplay></UserDisplay>
    </div>
  );
}

export default App;
