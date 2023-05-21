import { useContext, useEffect, useState } from "react";
import Post from "../post/Post";
import Share from "../share/Share";
import axios from "axios";
import "./feed.css";
import { AuthContext } from "../../context/AuthContext";
// import { Posts } from "../../dummyData";
export default function Feed({ username }) {
  const { user } = useContext(AuthContext);
  const BASE_URL = process.env.REACT_APP_BASE_URL;
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = username
        ? await axios.get(`${BASE_URL}/posts/profile/${username}`)
        : await axios.get(`${BASE_URL}/posts/timeline/${user._id}`);
      setPosts(res.data);
    };
    fetchPosts();
  }, [BASE_URL, user._id, username]);

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
