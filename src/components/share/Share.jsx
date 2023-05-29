import "./share.css";
import { MdPermMedia, MdLabel, MdLocationPin } from "react-icons/md";
import { BsFillEmojiHeartEyesFill } from "react-icons/bs";
import { useContext, useRef, useState } from "react";
import CancelIcon from "@mui/icons-material/Cancel";
import { AuthContext } from "../../context/AuthContext";
import axios from "axios";
//------------------------------------------
export default function Share({ onSubm }) {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const BASE_URL = process.env.REACT_APP_BASE_URL;
  const { user } = useContext(AuthContext);
  const desc = useRef();
  const [file, setFile] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newPost = { userId: user._id, desc: desc.current.value };
    // console.log("desc.current", desc.current.value);
    if (file) {
      const data = new FormData();
      const fileName = Date.now() + file.name;

      data.append("file", file);
      data.append("name", fileName);

      newPost.img = fileName;
      try {
        await axios.post(`${BASE_URL}/upload`, data);
      } catch (err) {
        console.log(err);
      }
    }
    try {
      await axios.post(`${BASE_URL}/posts`, newPost);
      // window.location.reload();
    } catch (err) {
      console.log(err);
    }
    desc.current.value = "";
    setFile(null);
    onSubm(true);
  };

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
            ref={desc}
          />
        </div>
        <hr className="shareHr" />
        {file && (
          <div className="shareImgContainer">
            <img src={URL.createObjectURL(file)} alt="" className="shareImg" />
            <CancelIcon
              className="shareCancelImg "
              onClick={() => setFile(null)}
            />
          </div>
        )}

        <form
          className="shareBottom"
          onSubmit={handleSubmit}
          encType="multipart/form-data"
        >
          <div className="shareOptions">
            <label htmlFor="file" className="shareOption">
              <MdPermMedia style={{ color: "tomato" }} className="shareIcon" />
              <span className="shareOptionText">Photo or Video</span>
              <input
                style={{ display: "none" }}
                type="file"
                id="file"
                accept=".png,.jpeg,.jpg,"
                onChange={(e) => setFile(e.target.files[0])}
                placeholder="Choose File"
              />
            </label>
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
          <button className="shareButton" type="submit">
            Share
          </button>
        </form>
      </div>
    </div>
  );
}
