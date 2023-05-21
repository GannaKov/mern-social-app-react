import "./share.css";
import { MdPermMedia, MdLabel, MdLocationPin } from "react-icons/md";
import { BsFillEmojiHeartEyesFill } from "react-icons/bs";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
export default function Share() {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const BASE_URL = process.env.REACT_APP_BASE_URL;
  const { user } = useContext(AuthContext);
  return (
    <div className="share">
      <div className="shareWrapper">
        <div className="shareTop">
          <img
            src={
              user.profilelPicture
                ? user.profilelPicture
                : PF + "person/no_avatar.png"
            }
            alt={user.username}
            className="shareProfileImg"
          />
          <input
            placeholder={"What's in your mind " + user.username + "?"}
            className="shareInput"
          />
        </div>
        <hr className="shareHr" />
        <div className="shareBottom">
          <div className="shareOptions">
            <div className="shareOption">
              <MdPermMedia style={{ color: "tomato" }} className="shareIcon" />
              <span className="shareOptionText">Photo or Video</span>
            </div>
            <div className="shareOption">
              <MdLabel style={{ color: "blue" }} className="shareIcon" />
              <span className="shareOptionText">Tag</span>
            </div>
            <div className="shareOption">
              <MdLocationPin style={{ color: "green" }} className="shareIcon" />
              <span className="shareOptionText">Location</span>
            </div>
            <div className="shareOption">
              <BsFillEmojiHeartEyesFill
                style={{ color: "goldenrod" }}
                className="shareIcon"
              />
              <span className="shareOptionText">Feelings</span>
            </div>
          </div>
          <button className="shareButton">Share</button>
        </div>
      </div>
    </div>
  );
}
