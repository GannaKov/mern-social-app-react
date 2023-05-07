import "./post.css";
import { MdOutlineMoreVert } from "react-icons/md";
import { GoComment } from "react-icons/go";
import { Users } from "../../dummyData";
import { useState } from "react";
//----------------------
export default function Post({ post }) {
  const [like, setLike] = useState(post.like);
  const [isLiked, setIsLiked] = useState(false);
  const likeHandler = () => {
    setLike(isLiked ? like - 1 : like + 1);
    setIsLiked(!isLiked);
  };
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;

  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <img
              src={Users.find((u) => u.id === post.userId).profilePicture}
              alt=""
              className="postProfileImg"
            />
            <span className="postUserName">
              {Users.find((u) => u.id === post.userId).username}
            </span>
            <span className="postDate">{post.date}</span>
          </div>
          <div className="postTopRight">
            <MdOutlineMoreVert />
          </div>
        </div>

        <div className="postCenter">
          <span className="postText">{post?.desc}</span>
          <img src={PF + post.photo} alt="" className="postImg" />
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <img
              src="/assets/like.png"
              alt=""
              className="likeIcon "
              onClick={likeHandler}
            />
            <img
              src="/assets/heart1.png"
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
