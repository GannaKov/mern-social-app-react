import "./closeFriend.css";
import React from "react";

export default function CloseFriend({ user }) {
  return (
    <li className="sidebarFriend">
      <img
        src={user.profilePicture}
        alt="Friend's"
        className="sidebarfriendImg"
      />
      <span className="sidebarFriendName">{user.username}</span>
    </li>
  );
}
