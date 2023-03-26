import "./sidebar.css";
import {
  MdRssFeed,
  MdGroups2,
  MdWorkOutline,
  MdSchool,
  MdEvent,
} from "react-icons/md";
import { GrCircleQuestion } from "react-icons/gr";
import {
  BsFillBookmarkFill,
  BsFillChatLeftTextFill,
  BsPlayCircleFill,
} from "react-icons/bs";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <ul className="sidebarList">
          <li className="sidebarListItem">
            <MdRssFeed className="sidebarIcon" />
            <span className="sidebarListItemText">Feed</span>
          </li>
          <li className="sidebarListItem">
            <BsFillChatLeftTextFill className="sidebarIcon" />
            <span className="sidebarListItemText">Chats</span>
          </li>
          <li className="sidebarListItem">
            <BsPlayCircleFill className="sidebarIcon" />
            <span className="sidebarListItemText">Videos</span>
          </li>
          <li className="sidebarListItem">
            <MdGroups2 className="sidebarIcon" />
            <span className="sidebarListItemText">Groups</span>
          </li>
          <li className="sidebarListItem">
            <BsFillBookmarkFill className="sidebarIcon" />
            <span className="sidebarListItemText">Bookmarks</span>
          </li>
          <li className="sidebarListItem">
            <GrCircleQuestion className="sidebarIcon" />
            <span className="sidebarListItemText">Questions</span>
          </li>
          <li className="sidebarListItem">
            <MdWorkOutline className="sidebarIcon" />
            <span className="sidebarListItemText">Jobs</span>
          </li>
          <li className="sidebarListItem">
            <MdEvent className="sidebarIcon" />
            <span className="sidebarListItemText">Events</span>
          </li>
          <li className="sidebarListItem">
            <MdSchool className="sidebarIcon" />
            <span className="sidebarListItemText">Courses</span>
          </li>
        </ul>
        <button className="sidebarButton">Show more</button>
        <hr className="sidebarHr" />
        <ul className="sidebarFriendList">
          <li className="sidebarFriend">
            <img
              src="/assets/person/frog-2.jpg"
              alt="Friend's"
              className="sidebarfriendImg"
            />
            <span className="sidebarFriendName">Second Frog</span>
          </li>
          <li className="sidebarFriend">
            <img
              src="/assets/person/frog-2.jpg"
              alt="Friend's"
              className="sidebarfriendImg"
            />
            <span className="sidebarFriendName">Second Frog</span>
          </li>
          <li className="sidebarFriend">
            <img
              src="/assets/person/frog-2.jpg"
              alt="Friend's"
              className="sidebarfriendImg"
            />
            <span className="sidebarFriendName">Second Frog</span>
          </li>
          <li className="sidebarFriend">
            <img
              src="/assets/person/frog-2.jpg"
              alt="Friend's"
              className="sidebarfriendImg"
            />
            <span className="sidebarFriendName">Second Frog</span>
          </li>
          <li className="sidebarFriend">
            <img
              src="/assets/person/frog-2.jpg"
              alt="Friend's"
              className="sidebarfriendImg"
            />
            <span className="sidebarFriendName">Second Frog</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
