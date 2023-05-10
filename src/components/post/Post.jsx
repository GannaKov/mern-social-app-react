import "./post.css";
import { MdOutlineMoreVert } from "react-icons/md";
import { GoComment } from "react-icons/go";
import axios from "axios";
import { useEffect, useState } from "react";
import React from "react";
import ReactTimeAgo from "react-time-ago";
import { Link } from "react-router-dom";
//----------------------
export default function Post({ post }) {
  const [like, setLike] = useState(post.likes.length);
  const [isLiked, setIsLiked] = useState(false);
  const likeHandler = () => {
    setLike(isLiked ? like - 1 : like + 1);
    setIsLiked(!isLiked);
  };
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const BASE_URL = process.env.REACT_APP_BASE_URL;
  const [user, setUser] = useState({});

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await axios.get(`${BASE_URL}/users?userId=${post.userId}`);
        setUser(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchUser();
  }, [BASE_URL, post.userId]);

  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <Link to={`profile/${user.username}`}>
              <img
                src={user.profilePicture || PF + "person/no_avatar.png"}
                alt=""
                className="postProfileImg"
              />
            </Link>

            <span className="postUserName">{user.username}</span>
            <span className="postDate">
              <ReactTimeAgo date={new Date(post.createdAt)} locale="en-US" />
            </span>
          </div>
          <div className="postTopRight">
            <MdOutlineMoreVert />
          </div>
        </div>

        <div className="postCenter">
          <span className="postText">{post?.desc}</span>
          <img src={PF + post.img} alt="" className="postImg" />
          {/* PF!!!!!!! */}
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <img
              src={`${PF}like.png`} //"/assets/like.png"
              alt=""
              className="likeIcon "
              onClick={likeHandler}
            />
            <img
              src={`${PF}heart1.png`} //"/assets/heart1.png"
              alt=""
              className="likeIcon "
              onClick={likeHandler}
            />
            <span className="postLikeCounter">{like}</span>
          </div>
          <div className="postBottomRight">
            <span className="postCommentText">{post.comment}</span>
            <GoComment />
          </div>
        </div>
      </div>
    </div>
  );
}
