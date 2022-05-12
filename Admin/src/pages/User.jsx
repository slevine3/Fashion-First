import React from "react";
import "./User.css";
import PermIdentityIcon from "@material-ui/icons/PermIdentity";
import CalendarToday from "@material-ui/icons/CalendarToday";
import PhoneAndroid from "@material-ui/icons/PhoneAndroid";
import MailOutline from "@material-ui/icons/MailOutline";
import LocationSearching from "@material-ui/icons/LocationSearching";

const User = () => {
  return (
    <div className="user">
      <div className="userTitleContainer">
        <h1 className="editUser">Edit User</h1>
        <button className="userAddButton">Create</button>
      </div>
      <div className="userContainer">
        <div className="userShow">
          <div className="userShowTop">
            <img
              src="https://media.istockphoto.com/photos/indoor-photo-of-handsome-european-guy-pictured-isolated-on-grey-to-picture-id1034357476?k=20&m=1034357476&s=612x612&w=0&h=OpiBGaVDU02LI1WVpb02Wza6AAdTGopRpf0Kx6q8V-Q="
              alt="avatar"
              className="userShowImg"
            />
            <div className="userShowTopTitle">
              <span className="userShowUsername">Anna Becker</span>
              <span className="userShowUserTitle">SoftWare Engineer</span>
            </div>
          </div>
          <div className="userShowBottom">
            <span className="userShowTitle">Account Details</span>
            <div className="userShowInfo">
              <PermIdentityIcon className="userShowIcon" />
              <span className="userShowInfoTitle">Annabeck99</span>
            </div>
            <div className="userShowInfo">
              <CalendarToday className="userShowIcon" />
              <span className="userShowInfoTitle">11.12.1987</span>
            </div>
            <span className="userShowTitle">Contact Details</span>
            <div className="userShowInfo">
              <PhoneAndroid className="userShowIcon" />
              <span className="userShowInfoTitle">+1 808-345-6467</span>
            </div>
            <div className="userShowInfo">
              <MailOutline className="userShowIcon" />
              <span className="userShowInfoTitle">Anna@gmail.com</span>
            </div>
            <div className="userShowInfo">
              <LocationSearching className="userShowIcon" />
              <span className="userShowInfoTitle">New York | USA</span>
            </div>
          </div>
        </div>
        <div className="userUpdate"></div>
      </div>
    </div>
  );
};

export default User;
