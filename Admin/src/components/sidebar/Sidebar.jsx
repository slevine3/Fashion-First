import React from "react";
import "./Sidebar.css";
import {
  LineStyle,
  Timeline,
  TrendingUp,
  PermIdentity,
  Storefront,
  AttachMoney,
  BarChart,
  MailOutline,
  DynamicFeed,
  ChatBubbleOutline,
  WorkOutline,
  Report,
} from "@material-ui/icons";

import { Link, useLocation } from "react-router-dom";

const Sidebar = () => {
  const location = useLocation();
  console.log(location.pathname);

  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Dashboard </h3>
          <ul className="sidebarList">
            <Link to="/" className="link">
              <li
                className={
                  location.pathname === "/"
                    ? "sidebarListItem active"
                    : "sidebarListItem"
                }
              >
                <LineStyle className="sidebarIcon" />
                Home
              </li>
            </Link>
            <Link to="users" className="link">
              <li
                className={
                  location.pathname === "/users"
                    ? "sidebarListItem active"
                    : "sidebarListItem"
                }
              >
                <PermIdentity className="sidebarIcon " />
                Users
              </li>
            </Link>
            <Link to="products" className="link">
              <li
                className={
                  location.pathname === "/products"
                    ? "sidebarListItem active"
                    : "sidebarListItem"
                }
              >
                <Storefront className="sidebarIcon" />
                Products
              </li>
            </Link>
          </ul>
        </div>
        {/* <div className="sidebarMenu">
          <h3 className="sidebarTitle">Quick Menu</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem">
              <Timeline className="sidebarIcon" />
              Analytics
            </li>
            <li className="sidebarListItem">
              <TrendingUp className="sidebarIcon" />
              Sales
            </li>

            <li className="sidebarListItem">
              <AttachMoney className="sidebarIcon" />
              Transactions
            </li>
          </ul>
        </div> */}
      </div>
    </div>
  );
};

export default Sidebar;
