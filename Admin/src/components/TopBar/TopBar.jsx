import "./TopBar.css";
import { Language, Settings } from "@material-ui/icons";
import NotificationsNoneIcon from "@material-ui/icons/NotificationsNone";
import { Badge } from "@material-ui/core";
const Topbar = () => {
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo">FashionFirst</span>
        </div>
        <div className="topRight">
          {/* <div className="topbarIconContainer">
            <Badge
              className="topIconBadge"
              badgeContent={4}
              overlap="rectangular"
              color="error"
            >
              <NotificationsNoneIcon />
            </Badge>
          </div>
          <div className="topbarIconContainer">
            <Badge
              className="topIconBadge"
              badgeContent={4}
              overlap="rectangular"
              color="error"
            >
              <Language />
            </Badge>
          </div>
          <div className="topbarIconContainer">
            <Badge
              className="topIconBadge"
              badgeContent={4}
              overlap="rectangular"
              color="error"
            >
              <Settings />
            </Badge>
          </div> */}
          <img
            src="https://placedog.net/500"
            alt=""
            className="img topAvatar"
          />
        </div>
      </div>
    </div>
  );
};

export default Topbar;
