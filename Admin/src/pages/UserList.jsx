import React from "react";
import "./UserList.css";
import { DataGrid } from "@material-ui/data-grid";
import headshot1 from "../Headshots/1.jfif";
const UserList = () => {
  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "user",
      headerName: "User",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="userListUser">
            <img className="userListImg" src={params.row.avatar} alt="avatar" />
            {params.row.username}
          </div>
        );
      },
    },
    {
      field: "email",
      headerName: "email",
      width: 200,
    },
    {
      field: "status",
      headerName: "Status",
      width: 120,
    },
    {
      field: "transaction",
      headerName: "Transaction Volume",
      description: "This column has a value getter and is not sortable.",
      sortable: false,
      width: 180,
    },
  ];

  const rows = [
    {
      id: 1,
      username: "JonSnow",
      avatar: `${headshot1}`,
      email: "jon@gmail.com",
      status: "active",
      transaction: "$120.00",
    },
    {
      id: 2,
      username: "JonSnow",
      avatar: `${headshot1}`,
      email: "jon@gmail.com",
      status: "active",
      transaction: "$120.00",
    },
    {
      id: 3,
      username: "JonSnow",
      avatar: `${headshot1}`,
      email: "jon@gmail.com",
      status: "active",
      transaction: "$120.00",
    },
    {
      id: 4,
      username: "JonSnow",
      avatar: `${headshot1}`,
      email: "jon@gmail.com",
      status: "active",
      transaction: "$120.00",
    },
    {
      id: 5,
      username: "JonSnow",
      avatar: `${headshot1}`,
      email: "jon@gmail.com",
      status: "active",
      transaction: "$120.00",
    },
    {
      id: 6,
      username: "JonSnow",
      avatar: `${headshot1}`,
      email: "jon@gmail.com",
      status: "active",
      transaction: "$120.00",
    },
  ];

  return (
    <div className="userList">
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        checkboxSelection
        disableSelectionOnClick
      />
    </div>
  );
};

export default UserList;
