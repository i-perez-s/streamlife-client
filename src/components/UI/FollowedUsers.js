import React from "react";
import { useSelector } from "react-redux";
import { FollowedUser } from "./FollowedUser";

export const FollowedUsers = () => {
  const { follows } = useSelector((state) => state.follows);
  return (
    <ul className="list-group flex-column d-inline-block first-menu">
      {follows.map((user) => (
        <FollowedUser key={user.id} user={user.followed[0]} />
      ))}
    </ul>
  );
};
