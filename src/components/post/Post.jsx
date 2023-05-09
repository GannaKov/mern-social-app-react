import "./post.css";
import { MdOutlineMoreVert } from "react-icons/md";
import { GoComment } from "react-icons/go";
import axios from "axios";
import { useEffect, useState } from "react";
import { format } from "timeago.js";
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
      const res = await axios.get(`${BASE_URL}/users/${post.userId}`);
      setUser(res.data);
    };
    fetchUser();
  }, [BASE_URL, post.userId]);

  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <img
              src={user.profilePicture || PF + "person/no_avatar.png"}
              alt=""
              className="postProfileImg"
            />
            <span className="postUserName">{user.username}</span>
            <span className="postDate">{format(post.createdAt)}</span>
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
