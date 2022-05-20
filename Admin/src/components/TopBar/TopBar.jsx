import "./TopBar.css";
import { Link } from "react-router-dom";

const Topbar = () => {
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <a href="https://fashionfirst.herokuapp.com/" className="logo">
            FashionFirst
          </a>
        </div>
        <div className="topRight"></div>
      </div>
    </div>
  );
};

export default Topbar;
