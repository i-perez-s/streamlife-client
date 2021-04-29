import React from "react";
import { useSelector } from "react-redux";

import { SearchCard } from "./SearchCard";

export const FollowScreen = () => {
  const { follows } = useSelector((state) => state.follows);
  return (
    <div>
      {follows.map((user) => (
        <SearchCard user={user.followed[0]} key={user._id} />
      ))}
    </div>
  );
};
