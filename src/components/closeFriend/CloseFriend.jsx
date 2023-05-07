import "./closeFriend.css";
import "./closeFriend.css";

export default function CloseFriend({ user }) {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  return (
    <li className="sidebarFriend">
      <img
        src={PF + user.profilePicture}
        alt="Friend's"
        className="sidebarfriendImg"
      />
      <span className="sidebarFriendName">{user.username}</span>
    </li>
  );
}
