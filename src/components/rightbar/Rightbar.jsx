import "./rightbar.css";
import { Users } from "../../dummyData";
import Online from "../online/Online";
//------------------------------------
export default function Rightbar({ user }) {
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
        <ul className="rightbarFriendList">
          {Users.map((u) => (
            <Online user={u} key={u.id} />
          ))}
        </ul>
      </>
    );
  };

  const ProfileRightBar = () => {
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;
    return (
      <>
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
          <div className="rightbarFollowing">
            <img
              src={`${PF}person/frog-2.jpg`}
              alt=""
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName">John Frogfrog</span>
          </div>
          <div className="rightbarFollowing">
            <img
              src={`${PF}person/frog-2.jpg`}
              alt=""
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName">John Frogfrog</span>
          </div>
          <div className="rightbarFollowing">
            <img
              src={`${PF}person/frog-2.jpg`}
              alt=""
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName">John Frogfrog</span>
          </div>
          <div className="rightbarFollowing">
            <img
              src={`${PF}person/frog-2.jpg`}
              alt=""
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName">John Frogfrog</span>
          </div>
          <div className="rightbarFollowing">
            <img
              src={`${PF}person/frog-2.jpg`}
              alt=""
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName">John Frogfrog</span>
          </div>
          <div className="rightbarFollowing">
            <img
              src={`${PF}person/frog-2.jpg`}
              alt=""
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName">John Frogfrog</span>
          </div>
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
