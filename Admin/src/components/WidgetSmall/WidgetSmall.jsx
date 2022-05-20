import React, { useEffect, useState } from "react";
import "./WidgetSmall.css";

import { userRequest } from "../../requestMethods";
const WidgetSmall = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const getUsers = async () => {
      try {
        const response = await userRequest.get("users/?new=true");
        setUsers(response.data);
      } catch (error) {}
    };
    getUsers();
  }, []);

  return (
    <div className="widgetSmall">
      <span className="widgetSmallTitle">New Members</span>
      <ul className="widgetSmallList">
        {users.map((user) => (
          <li className="widgetSmallListItem" key={user._id}>
            <div className="widgetSmallUser">
              <span className="widgetSmallUsername">{user.username}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default WidgetSmall;
