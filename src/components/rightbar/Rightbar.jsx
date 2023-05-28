import "./rightbar.css";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
//------------------------------------
export default function Rightbar({ user }) {
  const { user: currentUser } = useContext(AuthContext);
  const [followed, setFollowed] = useState(false);
  console.log("user", user);
  console.log("currentUser", currentUser);
  console.log("followed", followed);
  useEffect(() => {
    setFollowed(currentUser.followings.includes(user?._id));
  }, [currentUser, user._id]);

  const HomeRightbar = () => {
    return (
      <>
        <div className="birthdayContainer">
          <img src="/assets/gift.png" alt="" className="birthdayImg" />

          <span className="birthdayText">
            <b> Third Frog</b> and <b>3 other friends</b> have a birhday today.
          </span>
        </div>
        <img src="/assets/ad.jpg" alt="" className="rightbarAd" />
        <h4 className="rightbarTitle">Online Friends</h4>
        {/* <ul className="rightbarFriendList">
          {users.map((u) => (
            <Online user={u} key={u.id} />
          ))}
        </ul> */}
      </>
    );
  };

  const ProfileRightBar = () => {
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;
    const BASE_URL = process.env.REACT_APP_BASE_URL;
    const [friends, setFriends] = useState([]);

    useEffect(() => {
      const getFriends = async () => {
        try {
          const friendList = await axios.get(
            `${BASE_URL}/users/friends/${user._id}`
          );
          setFriends(friendList.data);
        } catch (err) {
          console.log(err);
        }
      };
      getFriends();
    }, [BASE_URL]); //user._id
    const handleClick = async () => {
      try {
        console.log("addr", `${BASE_URL}/users/${user._id}/unfollow`);
        if (followed) {
          await axios.put(`${BASE_URL}/users/${user._id}/unfollow`, {
            userId: currentUser._id,
          });
        } else {
          await axios.put(`${BASE_URL}/users/${user._id}/follow`, {
            userId: currentUser._id,
          });
          setFollowed(!followed);
        }
      } catch (err) {
        console.log(err);
      }
    };
    return (
      <>
        {user.username !== currentUser.username && (
          <button className="rightbarFollowButton" onClick={handleClick}>
            {followed ? "Unfollow" : "Follow"}
            {followed ? <RemoveIcon /> : <AddIcon />}
          </button>
        )}
        <h4 className="rightbarTitle">User information</h4>
        <div className="rightbarInfo">
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">City</span>
            <span className="rightbarInfoValue">{user.city}</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">From</span>
            <span className="rightbarInfoValue">{user.from}</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">Relationship</span>
            <span className="rightbarInfoValue">
              {user.relationship === 1
                ? "Single"
                : user.relationship === 2
                ? "Married"
                : "-"}
            </span>
          </div>
        </div>
        <h4 className="rightbarTitle">User Friends</h4>
        <div className="rightbarFollowings">
          {friends.map((friend) => (
            <Link to={"/profile/" + friend.username} key={friend._id}>
              <div className="rightbarFollowing">
                <img
                  src={
                    friend.profilelPicture
                      ? PF + friend.profilelPicture
                      : `${PF}person/no_avatar.png`
                  }
                  alt={friend.username}
                  className="rightbarFollowingImg"
                />
                <span className="rightbarFollowingName">{friend.username}</span>
              </div>
            </Link>
          ))}
        </div>
      </>
    );
  };
  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
        {user ? <ProfileRightBar /> : <HomeRightbar />}
      </div>
    </div>
  );
}
