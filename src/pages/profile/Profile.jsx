import "./profile.css";
import Feed from "../../components/feed/Feed";
import Rightbar from "../../components/rightbar/Rightbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Topbar from "../../components/topbar/Topbar";
import { useEffect, useState } from "react";
import axios from "axios";
//------------------------------------------------
export default function Profile() {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const BASE_URL = process.env.REACT_APP_BASE_URL;
  const [user, setUser] = useState({});

  useEffect(() => {
    const fetchUser = async () => {
      const res = await axios.get(`${BASE_URL}/users?username=Koshka`);
      setUser(res.data);
      console.log("hier in Prof", res.data);
    };
    fetchUser();
  }, [BASE_URL]);
  return (
    <>
      <Topbar />
      <div className="profile">
        <Sidebar />
        <div className="profileRight">
          <div className="profileRightTop">
            <div className="profileCover">
              <img
                src={`${PF}post/Cala Brandinchi 6.jpg`}
                alt=""
                className="profileCoverImg"
              />
              <img
                src={`${PF}person/frog-1.jpg`}
                alt=""
                className="profileUserImg"
              />
            </div>
            <div className="profileInfo">
              <h4 className="profileInfoName">{user.username}</h4>
              <span className="profileInfoDesc">{user.desc}</span>
            </div>
          </div>
          <div className="profileRightBottom">
            <Feed username="Koshka" />
            <Rightbar user={user} />
          </div>
        </div>
      </div>
    </>
  );
}
