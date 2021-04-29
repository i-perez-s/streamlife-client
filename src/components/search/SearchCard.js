import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { startFollowing, stopFollowing } from "../../actions/follow";

export const SearchCard = ({ user }) => {
  console.log(user);
  const dispatch = useDispatch();
  const { follows } = useSelector((state) => state.follows);
  const [isFollowing, setIsFollowing] = useState(true);
  useEffect(() => {
    const following = follows.filter((follow) => {
      return follow.followed[0]._id === user._id;
    });
    if (following.length === 0) {
      setIsFollowing(false);
    } else {
      setIsFollowing(true);
    }
  }, [follows, user]);

  const follow = () => {
    dispatch(startFollowing(user._id));
  };
  const deleteFollow = () => {
    dispatch(stopFollowing(user._id));
  };

  return (
    <Link to={`/stream/${user._id}`} className="navbarUserName">
      <div className="searchResultCard mt-3">
        <img src={user.photo} alt="userPhoto" />
        <p>{user.username}</p>
        {isFollowing ? (
          <button className="btn btn-danger" onClick={deleteFollow}>
            Stop following
          </button>
        ) : (
          <button className="btn btn-success" onClick={follow}>
            Follow
          </button>
        )}
      </div>
    </Link>
  );
};
