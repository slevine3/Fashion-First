import React from "react";
import "./WidgetSmall.css";
import { Visibility } from "@material-ui/icons";
import headshot1 from "../Headshots/1.jfif";
const WidgetSmall = () => {
  return (
    <div className="widgetSmall">
      <span className="widgetSmallTitle">New Members</span>
      <ul className="widgetSmallList">
        <li className="widgetSmallListItem">
          <img src={headshot1} alt="headshot1" className="widgetSmallImg" />
          <div className="widgetSmallUser">
            <span className="widgetSmallUsername">Josh Keller</span>
            <span className="widgetSmallUserTitle">Software Engineer</span>
          </div>
          <button className="widgetSmallButton">
            <Visibility className="widgetSmallIcon" />
            Display
          </button>
        </li>
        <li className="widgetSmallListItem">
          <img src={headshot1} alt="headshot" className="widgetSmallImg" />
          <div className="widgetSmallUser">
            <span className="widgetSmallUsername">Anna Keller</span>
            <span className="widgetSmallUserTitle">Software Engineer</span>
          </div>
          <button className="widgetSmallButton">
            <Visibility className="widgetSmallIcon" />
            Display
          </button>
        </li>
        <li className="widgetSmallListItem">
          <img src={headshot1} alt="headshot1" className="widgetSmallImg" />
          <div className="widgetSmallUser">
            <span className="widgetSmallUsername">Anna Keller</span>
            <span className="widgetSmallUserTitle">Software Engineer</span>
          </div>
          <button className="widgetSmallButton">
            <Visibility className="widgetSmallIcon" />
            Display
          </button>
        </li>
        <li className="widgetSmallListItem">
          <img src={headshot1} alt="headshot1" className="widgetSmallImg" />
          <div className="widgetSmallUser">
            <span className="widgetSmallUsername">Anna Keller</span>
            <span className="widgetSmallUserTitle">Software Engineer</span>
          </div>
          <button className="widgetSmallButton">
            <Visibility className="widgetSmallIcon" />
            Display
          </button>
        </li>
        <li className="widgetSmallListItem">
          <img src={headshot1} alt="headshot1" className="widgetSmallImg" />
          <div className="widgetSmallUser">
            <span className="widgetSmallUsername">Anna Keller</span>
            <span className="widgetSmallUserTitle">Software Engineer</span>
          </div>
          <button className="widgetSmallButton">
            <Visibility className="widgetSmallIcon" />
            Display
          </button>
        </li>
      </ul>
    </div>
  );
};

export default WidgetSmall;
