import React, { useEffect, useState } from "react";
import "./UserList.css";
import { DataGrid } from "@material-ui/data-grid";
import { useDispatch, useSelector } from "react-redux";
import { DeleteOutline } from "@material-ui/icons";
import { format } from "timeago.js";
import { Link } from "react-router-dom";
import { getUsers } from "../../redux/apiCalls";
import { deleteUser } from "../../redux/apiCalls";

const UserList = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    getUsers(dispatch);
  }, [dispatch]);

  const users = (useSelector((state) => state?.user?.users));

  const handleDelete = (id) => {
    deleteUser(id, dispatch);

  };

  const columns = [
    { field: "_id", headerName: "ID", width: 180 },
    {
      field: "user",
      headerName: "User",
      width: 200,
      renderCell: (params) => {
        return <div className="userListUser">{params.row.username}</div>;
      },
    },
    {
      field: "email",
      headerName: "Email",
      width: 200,
    },
    {
      field: "isAdmin",
      headerName: "isAdmin",
      width: 150,
    },
    {
      field: "createdAt",
      headerName: "Account Created",
      width: 180,
    },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={"/user/" + params.row._id}>
              <button className="userListEdit">Edit</button>
            </Link>
            <DeleteOutline
              className="userListDelete"
              onClick={() => handleDelete(params.row._id)}
            />
          </>
        );
      },
    },
  ];
  console.log(users);
  return (
    <div className="userList">
    {users && (
      <DataGrid
        rows={users}
        columns={columns}
        getRowId={(row) => row._id}
        pageSize={10}
        rowsPerPageOptions={[10]}
        checkboxSelection
        disableSelectionOnClick
      />         
    )}
  </div>
  );
};

export default UserList;
