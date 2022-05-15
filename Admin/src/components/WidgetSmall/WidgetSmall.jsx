import React from "react";
import "./WidgetSmall.css";
import { Visibility } from "@material-ui/icons";
const WidgetSmall = () => {
  return (
    <div className="widgetSmall">
      <span className="widgetSmallTitle">New Members</span>
      <ul className="widgetSmallList">
        <li className="widgetSmallListItem">
          <img src="https://images.squarespace-cdn.com/content/v1/53b599ebe4b08a2784696956/1504755539389-NUA1FAUO2KA2VU4GLK43/professional-headshots-nyc-051.jpg?format=1000w" alt="headshot1" className="widgetSmallImg" />
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
          <img
            src="https://images.squarespace-cdn.com/content/v1/53b599ebe4b08a2784696956/1504755539389-NUA1FAUO2KA2VU4GLK43/professional-headshots-nyc-051.jpg?format=1000w"
            alt="headshot"
            className="widgetSmallImg"
          />
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
          <img src="https://images.squarespace-cdn.com/content/v1/53b599ebe4b08a2784696956/1504755539389-NUA1FAUO2KA2VU4GLK43/professional-headshots-nyc-051.jpg?format=1000w" alt="headshot1" className="widgetSmallImg" />
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
          <img src="https://images.squarespace-cdn.com/content/v1/53b599ebe4b08a2784696956/1504755539389-NUA1FAUO2KA2VU4GLK43/professional-headshots-nyc-051.jpg?format=1000w" alt="headshot1" className="widgetSmallImg" />
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
          <img src="https://images.squarespace-cdn.com/content/v1/53b599ebe4b08a2784696956/1504755539389-NUA1FAUO2KA2VU4GLK43/professional-headshots-nyc-051.jpg?format=1000w" alt="headshot1" className="widgetSmallImg" />
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
