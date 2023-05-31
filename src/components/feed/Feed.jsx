import { useContext, useEffect, useState } from "react";
import Post from "../post/Post";
import Share from "../share/Share";
import axios from "axios";
import "./feed.css";
import { AuthContext } from "../../context/AuthContext";
import CircularProgress from "@mui/material/CircularProgress";
import { Report } from "notiflix/build/notiflix-report-aio";
//--------------------------------------------------
export default function Feed({ username }) {
  const { user } = useContext(AuthContext);
  const BASE_URL = process.env.REACT_APP_BASE_URL;
  const [posts, setPosts] = useState([]);
  const [isNewPost, setIsNewPost] = useState(false);
  const [isLoadindg, setIsLoading] = useState(false);
  const onSubm = (isTrue) => {
    setIsNewPost(isTrue);
  };

  useEffect(() => {
    setIsLoading(true);
    const fetchPosts = async () => {
      try {
        const res = username
          ? await axios.get(`${BASE_URL}/posts/profile/${username}`)
          : await axios.get(`${BASE_URL}/posts/timeline/${user._id}`);
        setPosts(
          res.data.sort((p1, p2) => {
            return new Date(p2.createdAt) - new Date(p1.createdAt);
          })
        );
        setIsNewPost(false);
        setIsLoading(false);
      } catch (err) {
        Report.failure("Ups...", " Something is wrong. Try again!", {
          duration: 4000,
          position: "top-center",
        });
      }
    };
    fetchPosts();
  }, [BASE_URL, user._id, username, isNewPost]);

  return (
    <div className="feed">
      <div className="feedWrapper">
        {(!username || username === user.username) && <Share onSubm={onSubm} />}
        {isLoadindg ? (
          <div className="loaderBox">
            <CircularProgress sx={{ color: "primary" }} size={50} />
          </div>
        ) : (
          <>
            {posts.map((post) => (
              <Post key={post._id} post={post} />
            ))}
          </>
        )}
      </div>
    </div>
  );
}
