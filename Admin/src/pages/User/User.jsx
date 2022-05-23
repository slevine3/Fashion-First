import React, { useState } from "react";
import "./User.css";
import PermIdentityIcon from "@material-ui/icons/PermIdentity";
import CalendarToday from "@material-ui/icons/CalendarToday";
import PhoneAndroid from "@material-ui/icons/PhoneAndroid";
import MailOutline from "@material-ui/icons/MailOutline";
import LocationSearching from "@material-ui/icons/LocationSearching";
import Publish from "@material-ui/icons/Publish";
import SupervisorAccountIcon from "@material-ui/icons/SupervisorAccount";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { format } from "timeago.js";
import CreateIcon from "@material-ui/icons/Create";
import FingerprintIcon from "@material-ui/icons/Fingerprint";
import { Dispatch } from "react";
import { updateUser } from "../../redux/apiCalls";
const User = () => {
  const [inputs, setInputs] = useState([]);

  const location = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [updateStatus, setUpdateStatus] = useState([]);
  const userId = location.pathname.split("/")[2];
  const user = useSelector((state) =>
    state.user.users.find((user) => user._id === userId)
  );

  const handleChange = (e) => {
    setInputs((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  const handleClick = (e) => {
    e.preventDefault();
    updateUser(userId, inputs, dispatch);
    setUpdateStatus("Successfully Updated");
  };

  return (
    <div className="user">
      <div className="userTitleContainer">
        <h1 className="editUser">Edit User</h1>
        <Link to="/newUser">
          <button className="userAddButton">Create</button>
        </Link>
      </div>
      <div className="userContainer">
        <div className="userShow">
          <div className="userShowBottom">
            <span className="userShowTitle">Account Details</span>

            <div className="userShowInfo">
              <PermIdentityIcon className="userShowIcon" />
              <span className="userShowInfoTitle">{user.username}</span>
            </div>

            <div className="userShowInfo">
              <MailOutline className="userShowIcon" />
              <span className="userShowInfoTitle">{user.email}</span>
            </div>

            <div className="userShowInfo">
              <CreateIcon className="userShowIcon" />
              <span className="userShowInfoTitle">
                {format(user.createdAt)}
              </span>
            </div>
            <div className="userShowInfo">
              <FingerprintIcon className="userShowIcon" />
              <span className="userShowInfoTitle">{user._id}</span>
            </div>
            <div className="userShowInfo">
              <SupervisorAccountIcon className="userShowIcon" />
              <span className="userShowInfoTitle">
                isAdmin: {`${user.isAdmin}`}
              </span>
            </div>
          </div>
        </div>
        <div className="userUpdate">
          <span className="userUpdateTitle">Edit</span>
          <form className="userUpdateForm">
            <div className="userUpdateLeft">
              <div className="userUpdateItem">
                <label>Username</label>
                <input
                  type="text"
                  name="username"
                  placeholder={`${user.username}`}
                  className="userUpdateInput"
                  onChange={handleChange}
                />
              </div>

              <div className="userUpdateItem">
                <label>Email</label>
                <input
                  name="email"
                  type="email"
                  placeholder={`${user.email}`}
                  className="userUpdateInput"
                  onChange={handleChange}
                />
              </div>

              <div className="userUpdateItem">
                <label>isAdmin</label>
                <select
                  className="newUserSelect"
                  name="isAdmin"
                  id="isAdmin"
                  onChange={handleChange}
                >
                  <option selected disabled>
                    Choose
                  </option>
                  <option value="true">Yes</option>
                  <option value="false">No</option>
                </select>
              </div>
            </div>
          
            <div style={{ display: "flex", flexDirection: "column" }}>
              <button onClick={handleClick} className="userUpdateButton">
                Update
              </button>
              <h4
                style={{ color: "green", marginTop: "20px", fontSize: "20px" }}
              >
                {updateStatus}
              </h4>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default User;
