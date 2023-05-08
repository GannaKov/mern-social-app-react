import "./topbar.css";
import { Link } from "react-router-dom";
import {
  BsFillPersonFill,
  BsSearch,
  BsFillChatLeftTextFill,
} from "react-icons/bs";

import { MdNotifications } from "react-icons/md";
//--------------------------------------
export default function Topbar() {
  return (
    <div className="topbarContainer">
      <div className="topbarLeft">
        <Link to="/">
          <span className="logo">GannaSocial</span>
        </Link>
      </div>
      <div className="topbarCenter">
        <div className="searchbar">
          <BsSearch className="searchIcon" />
          <input
            placeholder="Search for friend, post or video"
            className="searchInput"
          />
        </div>
      </div>
      <div className="topbarRight">
        <div className="topbarLinks">
          <span className="topbarLink">Homepage</span>
          <span className="topbarLink">Timeline</span>
        </div>
        <div className="topbarIcons">
          <div className="topbarIconItem">
            <BsFillPersonFill />
            <span className="topbarIconBadge">1</span>
          </div>
          <div className="topbarIconItem">
            <BsFillChatLeftTextFill />
            <span className="topbarIconBadge">2</span>
          </div>
          <div className="topbarIconItem">
            <MdNotifications />
            <span className="topbarIconBadge">1</span>
          </div>
        </div>
        <img src="/assets/person/frog-1.jpg" alt="" className="topbarImg" />
      </div>
    </div>
  );
}
