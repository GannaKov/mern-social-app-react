import { useContext, useEffect, useState } from "react";
import Post from "../post/Post";
import Share from "../share/Share";
import axios from "axios";
import "./feed.css";
import { AuthContext } from "../../context/AuthContext";

export default function Feed({ username }) {
  const { user } = useContext(AuthContext);
  const BASE_URL = process.env.REACT_APP_BASE_URL;
  const [posts, setPosts] = useState([]);
  const [isNewPost, setIsNewPost] = useState(false);
  const onSubm = (isTrue) => {
    setIsNewPost(isTrue);
  };

  useEffect(() => {
    const fetchPosts = async () => {
      const res = username
        ? await axios.get(`${BASE_URL}/posts/profile/${username}`)
        : await axios.get(`${BASE_URL}/posts/timeline/${user._id}`);
      setPosts(
        res.data.sort((p1, p2) => {
          return new Date(p2.createdAt) - new Date(p1.createdAt);
        })
      );
    };
    fetchPosts();
    setIsNewPost(false);
  }, [BASE_URL, user._id, username, isNewPost]);

  return (
    <div className="feed">
      <div className="feedWrapper">
        {(!username || username === user.username) && <Share onSubm={onSubm} />}
        {posts.map((post) => (
          <Post key={post._id} post={post} />
        ))}
      </div>
    </div>
  );
}
