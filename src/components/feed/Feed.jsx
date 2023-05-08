import { useEffect, useState } from "react";
import Post from "../post/Post";
import Share from "../share/Share";
import axios from "axios";
import "./feed.css";
// import { Posts } from "../../dummyData";
export default function Feed() {
  const BASE_URL = process.env.REACT_APP_BASE_URL;
  const [post, setPost] = useState([]);
  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get(
        `${BASE_URL}/posts/timeline/641c86a366edd65ab75b33ba`
      );
      console.log(res);
    };
    fetchPosts();
  }, []);

  return (
    <div className="feed">
      <div className="feedWrapper">
        <Share />
        {/* {Posts.map((post) => (
          <Post key={post.id} post={post} />
        ))} */}
      </div>
    </div>
  );
}
