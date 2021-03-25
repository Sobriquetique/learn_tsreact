import React from "react";
import { useSelector } from "react-redux";
import { AppState } from "./store/AppState";

const UserDisplay = () => {
  const user = useSelector((state: AppState) => state.user);
  if (user) {
    console.log("User: %o", user);
    return (
      <React.Fragment>
        <div>
          <label>username:</label>
          <span>{user.username}</span>
        </div>

        <div>
          <label>email:</label>
          <span>{user.email}</span>
        </div>

        <div>
          <label>city:</label>
          <span>{user.city}</span>
        </div>
      </React.Fragment>
    );
  } 
  else return null;
}

export default UserDisplay;