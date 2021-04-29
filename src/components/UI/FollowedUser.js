import React from "react";
import { Link } from "react-router-dom";

export const FollowedUser = ({ user }) => {
  const userFollowed = user;
  return (
    <li className="list-group-item pl-3 py-2">
      <Link to={`/stream/${userFollowed._id}`} className="navbarUserName">
        <img
          src={userFollowed.photo}
          alt="userPhoto"
          className="navbarUserPhoto"
        />
        <span className="ml-2 align-middle navbarUserName">
          {userFollowed.username}
        </span>
      </Link>
    </li>
  );
};
