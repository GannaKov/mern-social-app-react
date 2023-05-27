import "./post.css";
import { MdOutlineMoreVert } from "react-icons/md";
import { GoComment } from "react-icons/go";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import React from "react";
import ReactTimeAgo from "react-time-ago";
import { Link, useLocation, useParams } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

//----------------------
export default function Post({ post }) {
  const location = useLocation();
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const BASE_URL = process.env.REACT_APP_BASE_URL;
  const [like, setLike] = useState(post.likes.length);
  const [isLiked, setIsLiked] = useState(false);
  const [user, setUser] = useState({});
  const { user: currentUser } = useContext(AuthContext);

  const likeHandler = () => {
    try {
      axios.put(`${BASE_URL}/posts/${post._id}/like`, {
        userId: currentUser._id,
      });
    } catch (err) {}
    setLike(isLiked ? like - 1 : like + 1);
    setIsLiked(!isLiked);
  };

  useEffect(() => {
    setIsLiked(post.likes.includes(currentUser._id));
  }, [currentUser._id, post.likes]);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await axios.get(`${BASE_URL}/users?userId=${post.userId}`);
        setUser(res.data);
        // console.log("In Post res.data.username", res.data.username);
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
            {location.pathname !== `/profile/${user.username}` ? (
              <Link to={`profile/${user.username}`}>
                <img
                  src={
                    user.profilePicture
                      ? user.profilePicture
                      : PF + "person/no_avatar.png"
                  }
                  alt={user.username}
                  className="postProfileImg"
                />
              </Link>
            ) : (
              <img
                src={
                  user.profilePicture
                    ? user.profilePicture
                    : PF + "person/no_avatar.png"
                }
                alt={user.username}
                className="postProfileImg"
              />
            )}

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
          {post.img && (
            <img src={PF + post.img} alt={post?.desc} className="postImg" />
          )}
          {/* PF!!!!!!! */}
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <img
              src={`${PF}like.png`} //"/assets/like.png"
              alt="Like Icon"
              className="likeIcon "
              onClick={likeHandler}
            />
            <img
              src={`${PF}heart1.png`} //"/assets/heart1.png"
              alt="Heart Icon"
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
