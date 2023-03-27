import "./post.css";
import { MdOutlineMoreVert } from "react-icons/md";
// import { FcLike } from "react-icons/fc";
export default function Post() {
  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <img
              src="/assets/person/frog-1.jpg"
              alt=""
              className="postProfileImg"
            />
            <span className="postUserName">First Frog</span>
            <span className="postDate">5 min ago</span>
          </div>
          <div className="postTopRight">
            <MdOutlineMoreVert />
          </div>
        </div>

        <div className="postCenter">
          <span className="postText">Hey. it is my first post</span>
          <img src="/assets/post/Palau.jpg" alt="" className="postImg" />
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <img src="/assets/like.png" alt="" className="likeIcon " />
            <img src="/assets/heart1.png" alt="" className="likeIcon " />
            <span className="postLikeCounter">5</span>
          </div>
          <div className="postBottomRight">
            <span className="postCommentText">9 comments</span>
          </div>
        </div>
      </div>
    </div>
  );
}
