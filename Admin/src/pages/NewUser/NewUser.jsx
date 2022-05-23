import React, { useState } from "react";
import "./NewUser.css";
import { useNavigate } from "react-router-dom";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import app from "../../firebase";
import { addUser } from "../../redux/apiCalls";
import { useDispatch } from "react-redux";
import { ProgressBar } from "react-bootstrap";
const NewUser = () => {
  const [inputs, setInputs] = useState({});
  const [percentage, setPercentage] = useState(0);
  const [userStatus, setUserStatus] = useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setInputs((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  const handleClick = (e) => {
    e.preventDefault();
    const user = { ...inputs };
    console.log("user: ", user);

    addUser(user, dispatch);
    setUserStatus("User Created!");
  };

  return (
    <div className="newUser">
      <h1 className="newUserTitle">New User</h1>
      <form className="newUserForm">
        <div className="newUserItem">
          <label>Username</label>
          <input
            name="username"
            type="text"
            placeholder="John"
            onChange={handleChange}
          />
        </div>
        <div className="newUserItem">
          <label>Email</label>
          <input
            name="email"
            type="email"
            placeholder="john@gmail.com"
            onChange={handleChange}
          />
        </div>
        <div className="newUserItem">
          <label>Password</label>
          <input
            name="password"
            type="password"
            placeholder="password"
            onChange={handleChange}
          />
        </div>

        <div className="newUserItem">
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

        <div className="newUserButtonContainer" style={{ display: "flex", flexDirection: "column" }}>
  
           
          <button onClick={handleClick} className="newUserButton">
            Create
          </button>
         
          <h4 style={{ color: "green", marginTop: "20px", fontSize: "20px" }}>
            {userStatus}
          </h4>
        </div>
      </form>
    </div>
  );
};

export default NewUser;
