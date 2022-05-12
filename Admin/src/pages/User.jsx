import React from "react";
import "./User.css";
const User = () => {
  return (
    <div className="user">
      <div className="userTitleContainer">
        <h1 className="editUser">Edit User</h1>
        <button className="userAddButton">Create</button>
      </div>
    </div>
  );
};

export default User;
