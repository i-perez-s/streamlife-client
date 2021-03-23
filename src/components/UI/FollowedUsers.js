import React from "react";
import { FollowedUser } from "./FollowedUser";

export const FollowedUsers = () => {
  const users = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }];

  return (
    <ul className="list-group flex-column d-inline-block first-menu">
      {users.map((user) => (
        <FollowedUser key={user.id} />
      ))}
    </ul>
  );
};
