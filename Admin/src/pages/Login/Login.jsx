import "./Login.css";

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { login } from "../../redux/apiCalls";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [admin, setAdmin] = useState(null);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const please = useSelector(
    (state) => state.user.currentUser?.isAdmin
  );

  const handleClick = async (e) => {
    e.preventDefault();
    try {
      login(dispatch, { username: "admin", password: "12345" });
      setAdmin(
        JSON.parse(JSON.parse(localStorage.getItem("persist:root"))?.user)
          .currentUser?.isAdmin
      );
      if (
        JSON.parse(JSON.parse(localStorage.getItem("persist:root"))?.user)
          .currentUser?.isAdmin === true
      ) {
        navigate("/");
      }
    } catch (error) {}
  };

  console.log("login page admin: ", admin);
  useEffect(() => {
    if (admin === true) navigate("/");
  }, [admin]);

  return (
    <div className="login">
      <h1 className="admin_login">Admin Dashboard</h1>
      <input
        type="text"
        placeholder="username"
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="password"
        onChange={(e) => setPassword(e.target.value)}
      />

     <Link to='/'>
     <button onClick={handleClick}>Demo Login</button>
     </Link> 
    </div>
  );
};

export default Login;
