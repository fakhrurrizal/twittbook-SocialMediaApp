import React, {useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { followUser, unfollowUser } from "../../action/UserAction";


const User = ({person}) => {
  const { user } = useSelector((state) => state.authReducer.authData);
  const dispatch = useDispatch()
  const [following, setFollowing] = useState(person.followers.includes(user._id))
  const serverPublic = process.env.REACT_APP_PUBLIC_FOLDER;
  const handleFollow = () => {
    following ?
    dispatch(unfollowUser(person._id, user)):
    dispatch(followUser(person._id, user))

    setFollowing((prev)=>!prev)
  }

  return (
    <div className="follower">
      <div>
        <img src={person.profilePicture? serverPublic + person.profilePicture : serverPublic + "defaultProfile.png"} alt="" className="followerImage" />
        <div className="name">

          <span>{person.firstname}</span>
          <span>@{person.username}</span>
        </div>
      </div>
      <button className={following? "button fc-button unfollowButton": "button fc-button"} onClick={handleFollow}>{following ? "Unfollow" : "Follow"}</button>
    </div>
  );
};

export default User;
