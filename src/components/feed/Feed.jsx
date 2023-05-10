import { useEffect, useState } from "react";
import Post from "../post/Post";
import Share from "../share/Share";
import axios from "axios";
import "./feed.css";
// import { Posts } from "../../dummyData";
export default function Feed({ username }) {
  const BASE_URL = process.env.REACT_APP_BASE_URL;
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    console.log("username in Feed", username);
    const fetchPosts = async () => {
      const res = username
        ? await axios.get(`${BASE_URL}/posts/profile/${username}`)
        : await axios.get(
            `${BASE_URL}/posts/timeline/641c8b0b8e78252415bfd746`
          );
      setPosts(res.data);
    };
    fetchPosts();
  }, [BASE_URL, username]);

  return (
    <div className="feed">
      <div className="feedWrapper">
        <Share />
        {posts.map((post) => (
          <Post key={post._id} post={post} />
        ))}
      </div>
    </div>
  );
}
